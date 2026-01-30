// Translation utility using MyMemory API
export class TranslationService {
  static cache = new Map();
  
  static async translateText(text, targetLang = 'fr') {
    if (!text || text.trim() === '') return text;
    
    // Check cache first
    const cacheKey = `${text}_${targetLang}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      return cached;
    }
    
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
      );
      
      const data = await response.json();
      
      if (data.responseStatus === 200 && data.responseData) {
        const translatedText = data.responseData.translatedText;
        // Cache the result
        localStorage.setItem(cacheKey, translatedText);
        return translatedText;
      }
      
      return text; // Return original if translation fails
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  }
  
  static async translateElement(element, targetLang = 'fr') {
    if (!element) return;
    
    // Skip if element has data-no-translate attribute
    if (element.hasAttribute('data-no-translate')) return;
    
    // Get all text nodes
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          // Skip empty text nodes and nodes inside script/style tags
          if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
          if (node.parentElement.tagName === 'SCRIPT' || 
              node.parentElement.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    
    // Translate each text node
    for (const textNode of textNodes) {
      const originalText = textNode.textContent.trim();
      if (originalText && !this.shouldSkipTranslation(originalText)) {
        const translatedText = await this.translateText(originalText, targetLang);
        textNode.textContent = translatedText;
      }
    }
  }
  
  static shouldSkipTranslation(text) {
    // Skip URLs, email addresses, technical terms, etc.
    const skipPatterns = [
      /^https?:\/\//, // URLs
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Emails
      /^\d+$/, // Pure numbers
      /^[A-Z_]+$/, // Constants
      /^v\s*\d+\.\d+/, // Version numbers
    ];
    
    return skipPatterns.some(pattern => pattern.test(text.trim()));
  }
  
  static getStoredLanguage() {
    return localStorage.getItem('selectedLanguage') || 'US';
  }
  
  static setStoredLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
  }
}