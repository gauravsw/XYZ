 $(document).ready(function()
      {
        
        $("#tab").tabpager({
          items: 5,
          contents: 'contents',
          //time: 300,
          previous: '<<',
          next: '>>',
          //start: 1,
          position: 'top',
          //scroll: true
        });
      });