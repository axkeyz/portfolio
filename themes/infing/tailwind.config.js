module.exports = {
    content: ["content/**/*.md", "layouts/**/*.html"],
    theme: {
      extend: {
        fontFamily: {
          recursive: ['Recursive', 'sans-serif'],
          chivo: ['Chivo', 'sans-serif'],
          quicksand: ['Quicksand', 'sans-serif']
        },
      }
    },
    plugins: [],
  };