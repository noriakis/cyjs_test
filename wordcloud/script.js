
        var cy = window.cy = cytoscape({
            container: document.getElementById('cy'),
              style: cytoscape.stylesheet()
                .selector('node')
                .css({
                          'content': 'data(label)',
                          'shape' : 'data(shape)',
                          'background-image': 'data(image)',
                          'text-valign': 'bottom',
                          'background-color': '#FFF',
                          'background-fit': 'cover',
                          'width': 'data(size)',
                          'height': 'data(size)',
                          'font-size' : 'mapData(size, 0, 100, 1, 20)',
                          'text-outline-width': 1,
                          'text-outline-color': '#FFF',
                          'border-color' : '#555',
                          'border-width': 1
                      })
                .selector('edge')
                .css({
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier',
                        'width' : 'mapData(strength, 0.5, 1, 0, 5)'
                      }),
            'elements':
         {
        "nodes": [
            {
                "data": {
                    "id": "ME1",
                    "label": "ME1",
                    "image": "images/1.png",
                    "size": 250,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME10",
                    "label": "ME10",
                    "image": "images/10.png",
                    "size": 52.0901,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME11",
                    "label": "ME11",
                    "image": "images/11.png",
                    "size": 51.8378,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME12",
                    "label": "ME12",
                    "image": "images/12.png",
                    "size": 51.8018,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME13",
                    "label": "ME13",
                    "image": "images/13.png",
                    "size": 51.6937,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME14",
                    "label": "ME14",
                    "image": "images/14.png",
                    "size": 51.1532,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME15",
                    "label": "ME15",
                    "image": "images/15.png",
                    "size": 50.3243,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME16",
                    "label": "ME16",
                    "image": "images/16.png",
                    "size": 50,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME2",
                    "label": "ME2",
                    "image": "images/2.png",
                    "size": 135.045,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME3",
                    "label": "ME3",
                    "image": "images/3.png",
                    "size": 87.1171,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME4",
                    "label": "ME4",
                    "image": "images/4.png",
                    "size": 76.5946,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME5",
                    "label": "ME5",
                    "image": "images/5.png",
                    "size": 62.3604,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME6",
                    "label": "ME6",
                    "image": "images/6.png",
                    "size": 57.0991,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME7",
                    "label": "ME7",
                    "image": "images/7.png",
                    "size": 55.2252,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME8",
                    "label": "ME8",
                    "image": "images/8.png",
                    "size": 54,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME9",
                    "label": "ME9",
                    "image": "images/9.png",
                    "size": 52.7748,
                    "shape": "circle",
                    "group": null
                }
            }
        ],
        "edges": [
            {
                "data": {
                    "id": "ME1-(NA)-ME10",
                    "source": "ME1",
                    "target": "ME10",
                    "interaction": null,
                    "strength": 0.54
                }
            },
            {
                "data": {
                    "id": "ME1-(NA)-ME5",
                    "source": "ME1",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 0.95
                }
            },
            {
                "data": {
                    "id": "ME1-(NA)-ME8",
                    "source": "ME1",
                    "target": "ME8",
                    "interaction": null,
                    "strength": 0.71
                }
            },
            {
                "data": {
                    "id": "ME1-(NA)-ME9",
                    "source": "ME1",
                    "target": "ME9",
                    "interaction": null,
                    "strength": 0.535
                }
            },
            {
                "data": {
                    "id": "ME10-(NA)-ME5",
                    "source": "ME10",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 0.755
                }
            },
            {
                "data": {
                    "id": "ME11-(NA)-ME1",
                    "source": "ME11",
                    "target": "ME1",
                    "interaction": null,
                    "strength": 0.7
                }
            },
            {
                "data": {
                    "id": "ME11-(NA)-ME9",
                    "source": "ME11",
                    "target": "ME9",
                    "interaction": null,
                    "strength": 0.61
                }
            },
            {
                "data": {
                    "id": "ME12-(NA)-ME16",
                    "source": "ME12",
                    "target": "ME16",
                    "interaction": null,
                    "strength": 0.985
                }
            },
            {
                "data": {
                    "id": "ME13-(NA)-ME14",
                    "source": "ME13",
                    "target": "ME14",
                    "interaction": null,
                    "strength": 0.98
                }
            },
            {
                "data": {
                    "id": "ME13-(NA)-ME7",
                    "source": "ME13",
                    "target": "ME7",
                    "interaction": null,
                    "strength": 0.95
                }
            },
            {
                "data": {
                    "id": "ME13-(NA)-ME8",
                    "source": "ME13",
                    "target": "ME8",
                    "interaction": null,
                    "strength": 0.52
                }
            },
            {
                "data": {
                    "id": "ME14-(NA)-ME8",
                    "source": "ME14",
                    "target": "ME8",
                    "interaction": null,
                    "strength": 0.745
                }
            },
            {
                "data": {
                    "id": "ME15-(NA)-ME10",
                    "source": "ME15",
                    "target": "ME10",
                    "interaction": null,
                    "strength": 0.585
                }
            },
            {
                "data": {
                    "id": "ME15-(NA)-ME5",
                    "source": "ME15",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 0.69
                }
            },
            {
                "data": {
                    "id": "ME2-(NA)-ME1",
                    "source": "ME2",
                    "target": "ME1",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME2-(NA)-ME13",
                    "source": "ME2",
                    "target": "ME13",
                    "interaction": null,
                    "strength": 0.695
                }
            },
            {
                "data": {
                    "id": "ME2-(NA)-ME15",
                    "source": "ME2",
                    "target": "ME15",
                    "interaction": null,
                    "strength": 0.54
                }
            },
            {
                "data": {
                    "id": "ME2-(NA)-ME6",
                    "source": "ME2",
                    "target": "ME6",
                    "interaction": null,
                    "strength": 0.74
                }
            },
            {
                "data": {
                    "id": "ME2-(NA)-ME7",
                    "source": "ME2",
                    "target": "ME7",
                    "interaction": null,
                    "strength": 0.86
                }
            },
            {
                "data": {
                    "id": "ME3-(NA)-ME1",
                    "source": "ME3",
                    "target": "ME1",
                    "interaction": null,
                    "strength": 0.82
                }
            },
            {
                "data": {
                    "id": "ME3-(NA)-ME13",
                    "source": "ME3",
                    "target": "ME13",
                    "interaction": null,
                    "strength": 0.82
                }
            },
            {
                "data": {
                    "id": "ME3-(NA)-ME5",
                    "source": "ME3",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 0.565
                }
            },
            {
                "data": {
                    "id": "ME3-(NA)-ME9",
                    "source": "ME3",
                    "target": "ME9",
                    "interaction": null,
                    "strength": 0.685
                }
            },
            {
                "data": {
                    "id": "ME4-(NA)-ME10",
                    "source": "ME4",
                    "target": "ME10",
                    "interaction": null,
                    "strength": 0.925
                }
            },
            {
                "data": {
                    "id": "ME4-(NA)-ME16",
                    "source": "ME4",
                    "target": "ME16",
                    "interaction": null,
                    "strength": 0.675
                }
            },
            {
                "data": {
                    "id": "ME4-(NA)-ME5",
                    "source": "ME4",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 0.705
                }
            },
            {
                "data": {
                    "id": "ME6-(NA)-ME13",
                    "source": "ME6",
                    "target": "ME13",
                    "interaction": null,
                    "strength": 0.675
                }
            },
            {
                "data": {
                    "id": "ME7-(NA)-ME10",
                    "source": "ME7",
                    "target": "ME10",
                    "interaction": null,
                    "strength": 0.515
                }
            },
            {
                "data": {
                    "id": "ME9-(NA)-ME8",
                    "source": "ME9",
                    "target": "ME8",
                    "interaction": null,
                    "strength": 0.51
                }
            }
        ]
    },
            layout:{
                  name: 'cola',
                  padding: 0.5,
                  randomize: true,
                  avoidOverlap: true, 
                  nodeSpacing: function( node ){ return 0.1; },
                  nodeDimensionsIncludeLabels: true
              }
            });
        
