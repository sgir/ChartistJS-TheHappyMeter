new Chartist.Line('.ct-chart', {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    [1, 5, 0, 0, 0] //happiness scale from 1-10? 
//    [0, 2.5, 3, 2, 3], sadness scales
]
  ]
}, {
  width: 500,
  height: 300
});