
interface Observer {
    update(): void;
  }
  

  interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
  }
  

  class Editor implements Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notifyObservers(): void {
      this.observers.forEach((observer) => observer.update());
    }
  }
  

  class TextEditor implements Observer {
    private lines: string[] = [];
  
    constructor(private editor: Editor) {
      this.editor.addObserver(this);
    }
  
    update(): void {
      // Handle update event
      console.log('TextEditor received update event');
    }
  
    insertLine(lineNumber: number, text: string): void {
      // Insert the line at the specified position
      this.lines.splice(lineNumber - 1, 0, text);
      this.editor.notifyObservers();
    }
  
    removeLine(lineNumber: number): void {
      // Remove the line at the specified position
      this.lines.splice(lineNumber - 1, 1);
      this.editor.notifyObservers();
    }
  
    open(): void {
      // Receive text lines until "EOF" is entered
      let userInput: string;
      do {
        userInput = prompt('Enter a line of text (or type "EOF" to finish):');
        if (userInput !== 'EOF') {
          this.insertLine(this.lines.length + 1, userInput);
        }
      } while (userInput !== 'EOF');
    }
  
    save(): void {
      console.log('Content saved:', this.lines.join('\n'));
    }
  }
  
  // Usage
  const editor = new Editor();
  const textEditor = new TextEditor(editor);
  
  // Simulate user interaction
  textEditor.open();
  textEditor.save();
  