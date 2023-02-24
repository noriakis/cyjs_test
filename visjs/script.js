
    var nodes = null;
    var edges = null;
    var network = null;
    
    function draw() {
    nodes = [{"id":"ME12","label":"ME12","image":"images/12.png","shape":"image","size":50.0465},{"id":"ME9","label":"ME9","image":"images/9.png","shape":"image","size":50.5928},{"id":"ME11","label":"ME11","image":"images/11.png","shape":"image","size":50.0581},{"id":"ME1","label":"ME1","image":"images/1.png","shape":"image","size":113.8822},{"id":"ME7","label":"ME7","image":"images/7.png","shape":"image","size":51.174},{"id":"ME13","label":"ME13","image":"images/13.png","shape":"image","size":50.0349},{"id":"ME16","label":"ME16","image":"images/16.png","shape":"image","size":50},{"id":"ME8","label":"ME8","image":"images/8.png","shape":"image","size":50.8601},{"id":"ME2","label":"ME2","image":"images/2.png","shape":"image","size":75.0368},{"id":"ME15","label":"ME15","image":"images/15.png","shape":"image","size":50.0116},{"id":"ME6","label":"ME6","image":"images/6.png","shape":"image","size":56.4277},{"id":"ME10","label":"ME10","image":"images/10.png","shape":"image","size":50.0581},{"id":"ME3","label":"ME3","image":"images/3.png","shape":"image","size":58.1596},{"id":"ME4","label":"ME4","image":"images/4.png","shape":"image","size":57.1484},{"id":"ME5","label":"ME5","image":"images/5.png","shape":"image","size":56.7764},{"id":"ME14","label":"ME14","image":"images/14.png","shape":"image","size":50.0232},{"id":"ME0","label":"ME0","image":"images/0.png","shape":"image","size":200}];
    edges = [{"from":"ME12","to":"ME15","width":1},{"from":"ME9","to":"ME11","width":1},{"from":"ME9","to":"ME16","width":1},{"from":"ME9","to":"ME15","width":1},{"from":"ME9","to":"ME3","width":1},{"from":"ME11","to":"ME6","width":1},{"from":"ME11","to":"ME5","width":1},{"from":"ME1","to":"ME2","width":1},{"from":"ME1","to":"ME3","width":1},{"from":"ME1","to":"ME14","width":1},{"from":"ME1","to":"ME0","width":1},{"from":"ME7","to":"ME16","width":1},{"from":"ME13","to":"ME16","width":1},{"from":"ME13","to":"ME2","width":1},{"from":"ME13","to":"ME4","width":1},{"from":"ME13","to":"ME14","width":1},{"from":"ME8","to":"ME15","width":1},{"from":"ME8","to":"ME5","width":1},{"from":"ME2","to":"ME0","width":1},{"from":"ME6","to":"ME1","width":1},{"from":"ME6","to":"ME10","width":1},{"from":"ME6","to":"ME3","width":1},{"from":"ME10","to":"ME16","width":1},{"from":"ME3","to":"ME7","width":1},{"from":"ME4","to":"ME1","width":1},{"from":"ME4","to":"ME2","width":1},{"from":"ME4","to":"ME5","width":1},{"from":"ME4","to":"ME14","width":1},{"from":"ME5","to":"ME10","width":1},{"from":"ME5","to":"ME3","width":1},{"from":"ME14","to":"ME3","width":1},{"from":"ME14","to":"ME0","width":1},{"from":"ME0","to":"ME7","width":1},{"from":"ME0","to":"ME8","width":1},{"from":"ME0","to":"ME15","width":1}];
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {
        nodes: {
          borderWidth: 2,
          size: 30,
          color: {
            border: '#222222',
    background: 'white',
    },
    font: { color: 'black' },
    },
    edges: {
        length: 200,
        color: 'lightgray',
        arrows: { to: {enabled: true} }
    },
    layout: {
        improvedLayout: true
    }
    };
    network = new vis.Network(container, data, options);
    }
    
    window.addEventListener('load', () => {
        draw();
    });
    
