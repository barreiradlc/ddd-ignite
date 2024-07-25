class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * 
   * Receives a string and normalize it to a valid slug value.
   * 
   * EG: "A sample title" => "a-sample-title"
   * 
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')
    
    return new Slug(slugText)
  }
}

export { Slug }
