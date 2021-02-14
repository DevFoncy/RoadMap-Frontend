import { JAVASCRIPT_COURSE, HTML_COURSE, CSS_COURSE,CSS_Responsive_web,CSS_Framework,CSS_Preproccesor,CSS_Preproccesors} from './constant.js';

var requiredCourse = "#ffc107";
var blackColor = "black";
var contentColor = "#9e9e9e8c";
var dirDist50 = "#E8544E", dirDist10 = "#FFD265", dirDistLess10 = "#2AA775";

Highcharts.chart('container', {

  chart: {
    type: 'networkgraph',
    marginTop: 80
  },

  title: {
    text: 'The RoadMap Wintatech Training Frontend Developer'
  },

  subtitle: {
    text: 'Click node and start :)'
  },
  tooltip:{
    formatter:function(){
      var info="";
      console.log('this',this);
      document.onclick= function(event) {
        // Compensate for IE<9's non-standard event model
        //
        if (event===undefined) event= window.event;
        var target= 'target' in event? event.target : event.srcElement;
    
        alert('clicked on '+target.tagName);
    };
      switch(this.key){
          case JAVASCRIPT_COURSE: 
          console.log(JAVASCRIPT_COURSE);
          info="Esto es un test <b>more than 50</b> direct distinations Esto es un test <b>more than 50</b> direct distinations Esto es un test <b>more than 50</b> direct distinations Esto es un test <b>more than 50</b> direct distinations Esto es un test <b>more than 50</b> direct distinations"
          break;
      }
      return "<a href='https://www.google.com/' target='_blank'>Testeo</a>";
    }
  },

  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 100
      }
    }
  },

  series: [{
    marker: {
      radius: 13,
    },
    dataLabels: {
      enabled: true,
      linkFormat: '',
      allowOverlap: true
    },
    data: [
        ['Principal Topics',HTML_COURSE],
        ['Principal Topics',CSS_COURSE],
        ['Principal Topics',JAVASCRIPT_COURSE],
        [HTML_COURSE,CSS_COURSE],
        [CSS_COURSE, JAVASCRIPT_COURSE],
        [CSS_COURSE + '1', CSS_Responsive_web],
        [CSS_COURSE + '1', CSS_Framework],
        [CSS_COURSE + '1',  CSS_Preproccesor],
        [CSS_Preproccesor,  CSS_Preproccesors[0]],
        [CSS_Preproccesor,  CSS_Preproccesors[1]],
        [CSS_Preproccesor,  CSS_Preproccesors[2]],
    ],
    nodes: [{
      id: HTML_COURSE,
      color: requiredCourse,
      
    }, {
      id: CSS_COURSE,
      color: requiredCourse,
    },{
        id: CSS_COURSE + '1',
        color: requiredCourse,
    },{
        id: JAVASCRIPT_COURSE,
        color: requiredCourse,
        percentage: 50,
        className: 'testClass',
        x:500,
        y:500,
    }, {
        id: 'Principal Topics',
        color: blackColor,
        marker: {
            radius: 18,
        },
    },{
        id: CSS_Responsive_web,
        color: contentColor,
      }
    ,{
        id: CSS_Framework,
        color: contentColor,
    },
    {
        id: CSS_Preproccesor,
        color: 'green',
      },
      {
        id: CSS_Preproccesors[0],
        color: 'blue',
        marker: {
            radius: 5,
        },
      } ,
      {
        id:CSS_Preproccesors[1],
        color: 'blue',
        marker: {
            radius: 5,
        },
      } , {
        id: CSS_Preproccesors[2],
        color: 'blue',
        marker: {
            radius: 5,
        },
      }     
    ]}]
});