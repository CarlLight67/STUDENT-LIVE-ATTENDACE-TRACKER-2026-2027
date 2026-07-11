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
            opacity: [0,1],
            translateY: [100,0],
            easing: 'easeOutElastic(1, 5)',
            duration: 6000,
      });

      anime({
            targets: `footer`,
            opacity: [0,1],
            translateY: [100,0],
            easing: 'easeOutElastic(0.2, 5)',
            duration: 9000
      });
      anime({
            targets: `.box1`,
            opacity: [0,1],
            translateX: [-100,0],
            easing: 'easeOutElastic(0.2, 5)',
            duration: 2500
      });
      anime({
            targets: `.box2`,
            opacity: [0,1],
            translateX: [-200,0],
            easing: 'easeOutElastic(0.2, 5)',
            duration: 2500
      });
      anime({
            targets: `.box3`,
            opacity: [0,1],
            translateX: [-300,0],
            easing: 'easeOutElastic(0.2, 5)',
            duration: 2500
      });
      anime({
            targets: `.box4`,
            opacity: [0,1],
            translateX: [-400,0],
            easing: 'easeOutElastic(0.2, 5)',
            duration: 2500
      });

