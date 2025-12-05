// Simple markdown parser to convert markdown to HTML
// This is a basic parser - for production, consider using a library like marked or remark

export interface ParsedMarkdown {
  frontmatter: {
    author?: string;
    date?: string;
    category?: string;
    readTime?: number;
  };
  content: string;
  excerpt: string;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function parseMarkdown(markdown: string): ParsedMarkdown {
  const lines = markdown.split('\n');
  const frontmatter: ParsedMarkdown['frontmatter'] = {};
  let frontmatterEnd = 0;
  let hasFrontmatter = false;
  
  // Parse frontmatter (first few lines with key: value format)
  // Only parse if we find frontmatter keys, otherwise treat everything as content
  for (let i = 0; i < Math.min(10, lines.length); i++) {
    const line = lines[i];
    if (line.includes('撰寫人:')) {
      frontmatter.author = line.split('撰寫人:')[1]?.trim() || '';
      hasFrontmatter = true;
    } else if (line.includes('撰寫時間:')) {
      frontmatter.date = line.split('撰寫時間:')[1]?.trim() || '';
      hasFrontmatter = true;
    } else if (line.includes('種類:')) {
      frontmatter.category = line.split('種類:')[1]?.trim() || '';
      hasFrontmatter = true;
    } else if (line.includes('閱讀時間（分鐘）:')) {
      const timeStr = line.split('閱讀時間（分鐘）:')[1]?.trim() || '0';
      frontmatter.readTime = parseInt(timeStr, 10);
      hasFrontmatter = true;
    } else if (line.startsWith('#') && hasFrontmatter) {
      // First heading after frontmatter - content starts here (include the heading)
      frontmatterEnd = i;
      break;
    }
  }
  
  // If no frontmatter found, use all content (including all headings)
  // If frontmatter found, skip only the frontmatter lines but keep all headings
  let contentLines = hasFrontmatter && frontmatterEnd > 0 
    ? lines.slice(frontmatterEnd)  // Include the heading line
    : lines;  // Use all lines if no frontmatter
  
  // Remove the first line if it starts with '# ' (single hash with space)
  if (contentLines.length > 0 && contentLines[0].trim().startsWith('# ')) {
    contentLines = contentLines.slice(1);
  }
  
  const content = markdownToHTML(contentLines.join('\n'));
  
  // Generate excerpt (first paragraph or first 200 chars)
  const excerpt = generateExcerpt(contentLines.join('\n'));
  
  return {
    frontmatter,
    content,
    excerpt
  };
}

function generateExcerpt(markdown: string): string {
  // Remove markdown syntax for excerpt
  let text = markdown
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links
    .replace(/^[-*+]\s+/gm, '') // Remove list markers
    .replace(/^>\s+/gm, '') // Remove blockquotes
    .trim();
  
  // Get first paragraph or first 200 characters
  const firstParagraph = text.split('\n\n')[0] || text;
  if (firstParagraph.length > 200) {
    return firstParagraph.substring(0, 200) + '...';
  }
  return firstParagraph;
}

function markdownToHTML(markdown: string): string {
  let html = markdown;
  
  // IMPORTANT: Process images FIRST, before links and other markdown
  // This prevents images from being converted to links
  html = html.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g, (match, alt, src) => {
    // Extract filename from path (handle URL encoded paths and various path formats)
    let filename = '';
    try {
      // Try to decode the path
      const decodedPath = decodeURIComponent(src);
      // Extract filename (last part after / or \)
      filename = decodedPath.split('/').pop() || decodedPath.split('\\').pop() || '';
      // Remove any query parameters or fragments
      filename = filename.split('?')[0].split('#')[0];
    } catch (e) {
      // If decoding fails, try to extract from original path
      filename = src.split('/').pop() || src.split('\\').pop() || '';
      filename = filename.split('?')[0].split('#')[0];
    }
    
    // Clean up filename - handle special cases like "場次邀請表單 1.png" -> "場次邀請表單.png"
    // Remove trailing numbers before extension (e.g., " 1.png" -> ".png")
    filename = filename.replace(/\s+\d+(?=\.(png|jpg|jpeg|gif|webp|svg)$)/i, '');
    
    // If no filename or doesn't look like an image, return original
    if (!filename || !filename.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i)) {
      return match;
    }
    
    // Use data attribute to identify images that need path resolution in InstructionPostPage
    // The actual path will be resolved using Vite's glob import
    return `<img data-instruction-image="${filename}" alt="${alt || ''}" style="max-width: 100%; height: auto;" />`;
  });
  
  // Headers with IDs for anchor links
  html = html.replace(/^### (.*$)/gim, (match, text) => {
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\u4e00-\u9fff-]/g, '')
      .replace(/[？?！!。，,]/g, '');
    return `<h3 id="${id}" data-anchor="${id}">${text}</h3>`;
  });
  html = html.replace(/^## (.*$)/gim, (match, text) => {
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\u4e00-\u9fff-]/g, '')
      .replace(/[？?！!。，,]/g, '');
    return `<h2 id="${id}" data-anchor="${id}">${text}</h2>`;
  });
  html = html.replace(/^# (.*$)/gim, (match, text) => {
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\u4e00-\u9fff-]/g, '')
      .replace(/[？?！!。，,]/g, '');
    return `<h1 id="${id}" data-anchor="${id}">${text}</h1>`;
  });
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Links (images are already processed above, so this won't match them)
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (match, text, href) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  });
  
  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr/>');
  
  // Blockquotes
  html = html.replace(/^>\s+(.*$)/gim, '<blockquote>$1</blockquote>');
  
  // Process lists line by line to handle them correctly with indentation support
  const lines = html.split('\n');
  const processedLines: string[] = [];
  
  // Track list state at each indentation level
  interface ListState {
    type: 'ul' | 'ol' | null;
    level: number;
  }
  const listStack: ListState[] = [];
  let openLiTag: number | null = null; // Track if we have an open <li> tag and at what indent level
  
  function getIndentLevel(line: string): number {
    const match = line.match(/^(\s*)/);
    return match ? match[1].length : 0;
  }
  
  function closeListsToLevel(targetLevel: number) {
    // If we have an open <li> at a level >= targetLevel, close it first
    if (openLiTag !== null && openLiTag >= targetLevel) {
      processedLines.push('</li>');
      openLiTag = null;
    }
    
    while (listStack.length > 0 && listStack[listStack.length - 1].level >= targetLevel) {
      const state = listStack.pop()!;
      if (state.type === 'ul') {
        processedLines.push('</ul>');
      } else if (state.type === 'ol') {
        processedLines.push('</ol>');
      }
    }
  }
  
  function isListItem(line: string): boolean {
    const trimmed = line.trim();
    return /^[-*+]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed);
  }
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const indentLevel = getIndentLevel(line);
    const nextLine = i + 1 < lines.length ? lines[i + 1] : null;
    const nextIndentLevel = nextLine ? getIndentLevel(nextLine) : -1;
    const nextIsListItem = nextLine ? isListItem(nextLine) : false;
    const hasNestedContent = nextIsListItem && nextIndentLevel > indentLevel;
    
    if (!trimmed) {
      // Empty line - close open <li> and all lists
      if (openLiTag !== null) {
        processedLines.push('</li>');
        openLiTag = null;
      }
      closeListsToLevel(0);
      processedLines.push('');
      continue;
    }
    
    // Check for unordered list item (with indentation support)
    const unorderedMatch = trimmed.match(/^[-*+]\s+(.+)$/);
    if (unorderedMatch) {
      // Close any open <li> at this or deeper level
      if (openLiTag !== null && openLiTag >= indentLevel) {
        processedLines.push('</li>');
        openLiTag = null;
      }
      
      // Find the appropriate level in the stack
      const currentState = listStack.length > 0 ? listStack[listStack.length - 1] : null;
      
      // If we need to start a new list or change list type at this level
      if (!currentState || currentState.level !== indentLevel || currentState.type !== 'ul') {
        // Close lists deeper than this level, but keep lists at shallower levels open
        closeListsToLevel(indentLevel);
        // Start new unordered list
        listStack.push({ type: 'ul', level: indentLevel });
        processedLines.push('<ul>');
      }
      
      // Open <li> tag - close it only if there's no nested content
      if (hasNestedContent) {
        processedLines.push(`<li>${unorderedMatch[1]}`);
        openLiTag = indentLevel;
      } else {
        processedLines.push(`<li>${unorderedMatch[1]}</li>`);
      }
      continue;
    }
    
    // Check for ordered list item (with indentation support)
    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (orderedMatch) {
      const listNumber = orderedMatch[1];
      const content = orderedMatch[2];
      
      // Close any open <li> at this or deeper level
      if (openLiTag !== null && openLiTag >= indentLevel) {
        processedLines.push('</li>');
        openLiTag = null;
      }
      
      // Find the appropriate level in the stack
      const currentState = listStack.length > 0 ? listStack[listStack.length - 1] : null;
      
      // If we need to start a new list or change list type at this level
      if (!currentState || currentState.level !== indentLevel || currentState.type !== 'ol') {
        // Close lists deeper than this level, but keep lists at shallower levels open
        closeListsToLevel(indentLevel);
        // Start new ordered list
        listStack.push({ type: 'ol', level: indentLevel });
        processedLines.push('<ol>');
      }
      
      // Preserve the original numbering by using the value attribute
      // Open <li> tag - close it only if there's no nested content
      if (hasNestedContent) {
        processedLines.push(`<li value="${listNumber}">${content}`);
        openLiTag = indentLevel;
      } else {
        processedLines.push(`<li value="${listNumber}">${content}</li>`);
      }
      continue;
    }
    
    // Not a list item - close open <li> and all lists
    if (openLiTag !== null) {
      processedLines.push('</li>');
      openLiTag = null;
    }
    closeListsToLevel(0);
    processedLines.push(line);
  }
  
  // Close any remaining open <li> and lists
  if (openLiTag !== null) {
    processedLines.push('</li>');
  }
  closeListsToLevel(0);
  
  html = processedLines.join('\n');
  
  // Paragraphs (lines that aren't already HTML tags)
  // Don't wrap img tags in paragraphs - they should be standalone
  html = html.split('\n').map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return trimmed; // Already HTML (including img tags)
    return '<p>' + trimmed + '</p>';
  }).join('\n');
  
  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>\s*<\/p>/g, '');
  
  // Clean up nested lists
  html = html.replace(/<\/ul>\s*<ul>/g, '');
  html = html.replace(/<\/ol>\s*<ol>/g, '');
  
  // Clean up paragraphs that contain only img tags (img should not be in p tags)
  html = html.replace(/<p>(<img[^>]*>)<\/p>/g, '$1');
  
  return html;
}

// Extract H2 headings from markdown content
export function extractH2Headings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  const lines = markdown.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    // Match H2 headings (## heading)
    const h2Match = trimmed.match(/^##\s+(.+)$/);
    if (h2Match) {
      const text = h2Match[1]
        .replace(/\*\*/g, '') // Remove bold markers
        .trim();
      
      // Generate ID using the same logic as markdownToHTML
      const id = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\u4e00-\u9fff-]/g, '')
        .replace(/[？?！!。，,]/g, '');
      
      headings.push({
        id,
        text,
        level: 2
      });
    }
  }
  
  return headings;
}

