casper.
  start( 'http://www.google.nl' ).
  then(function(){
    phantomcss.screenshot('#hplogo', 'google');
  });

casper.run();
