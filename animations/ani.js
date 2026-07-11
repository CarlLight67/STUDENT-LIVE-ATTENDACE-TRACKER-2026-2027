 anime({
      targets: 'header',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutElastic(0.2, 5)',
});

anime({
      targets: '.hive',
      opacity: [0,2],
      translateX: [-200, 0],
      duration: 5000 ,
      rotate: [360]  ,    
      easing: 'easeOutElastic(0.2, 5)'
});


      
      anime({
            targets: `main`,
            opacity: [-0.2,1],
            easing: 'easeOutElastic(0.2, 5)',
            duration: 6000,
            translateY: [10,0],
      
            easing: 'easeOutElastic(0.2, 5)'
      });

      anime({
            targets: `footer`,
            opacity: [-0.2,1],
            easing: 'easeOutElastic(0.2, 5)',
            duration: 1000,
            translateY: [5,0],
      
            easing: 'easeOutElastic(0.2, 5)'
      });

