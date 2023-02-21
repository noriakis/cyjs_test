import cytoscapeBubblesets from "https://cdn.skypack.dev/cytoscape-bubblesets@3.1.0";
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
                        'width' : '4',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier',
                        'width' : 'mapData(strength, 0.5, 1, 0, 5)'
                      }),
            'elements':
         {
        "nodes": [
            {
                "data": {
                    "id": "ME0",
                    "label": "ME0",
                    "image": "images/0.png",
                    "size": 200,
                    "shape": "circle",
                    "group": "cluster1"
                }
            },
            {
                "data": {
                    "id": "ME1",
                    "label": "ME1",
                    "image": "images/1.png",
                    "size": 113.8822,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME10",
                    "label": "ME10",
                    "image": "images/10.png",
                    "size": 50.0581,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME11",
                    "label": "ME11",
                    "image": "images/11.png",
                    "size": 50.0581,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME12",
                    "label": "ME12",
                    "image": "images/12.png",
                    "size": 50.0465,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME13",
                    "label": "ME13",
                    "image": "images/13.png",
                    "size": 50.0349,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME14",
                    "label": "ME14",
                    "image": "images/14.png",
                    "size": 50.0232,
                    "shape": "circle",
                    "group": "cluster2"
                }
            },
            {
                "data": {
                    "id": "ME15",
                    "label": "ME15",
                    "image": "images/15.png",
                    "size": 50.0116,
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
                    "size": 75.0368,
                    "shape": "circle",
                    "group": "cluster1"
                }
            },
            {
                "data": {
                    "id": "ME3",
                    "label": "ME3",
                    "image": "images/3.png",
                    "size": 58.1596,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME4",
                    "label": "ME4",
                    "image": "images/4.png",
                    "size": 57.1484,
                    "shape": "circle",
                    "group": "cluster2"
                }
            },
            {
                "data": {
                    "id": "ME5",
                    "label": "ME5",
                    "image": "images/5.png",
                    "size": 56.7764,
                    "shape": "circle",
                    "group": "cluster2"
                }
            },
            {
                "data": {
                    "id": "ME6",
                    "label": "ME6",
                    "image": "images/6.png",
                    "size": 56.4277,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME7",
                    "label": "ME7",
                    "image": "images/7.png",
                    "size": 51.174,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME8",
                    "label": "ME8",
                    "image": "images/8.png",
                    "size": 50.8601,
                    "shape": "circle",
                    "group": null
                }
            },
            {
                "data": {
                    "id": "ME9",
                    "label": "ME9",
                    "image": "images/9.png",
                    "size": 50.5928,
                    "shape": "circle",
                    "group": null
                }
            }
        ],
        "edges": [
            {
                "data": {
                    "id": "ME12-(NA)-ME15",
                    "source": "ME12",
                    "target": "ME15",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME9-(NA)-ME11",
                    "source": "ME9",
                    "target": "ME11",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME9-(NA)-ME16",
                    "source": "ME9",
                    "target": "ME16",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME9-(NA)-ME15",
                    "source": "ME9",
                    "target": "ME15",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME9-(NA)-ME3",
                    "source": "ME9",
                    "target": "ME3",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME11-(NA)-ME6",
                    "source": "ME11",
                    "target": "ME6",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME11-(NA)-ME5",
                    "source": "ME11",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME1-(NA)-ME2",
                    "source": "ME1",
                    "target": "ME2",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME1-(NA)-ME3",
                    "source": "ME1",
                    "target": "ME3",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME1-(NA)-ME5",
                    "source": "ME1",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME1-(NA)-ME14",
                    "source": "ME1",
                    "target": "ME14",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME1-(NA)-ME0",
                    "source": "ME1",
                    "target": "ME0",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME7-(NA)-ME16",
                    "source": "ME7",
                    "target": "ME16",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME13-(NA)-ME16",
                    "source": "ME13",
                    "target": "ME16",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME13-(NA)-ME2",
                    "source": "ME13",
                    "target": "ME2",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME13-(NA)-ME4",
                    "source": "ME13",
                    "target": "ME4",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME13-(NA)-ME14",
                    "source": "ME13",
                    "target": "ME14",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME8-(NA)-ME15",
                    "source": "ME8",
                    "target": "ME15",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME8-(NA)-ME5",
                    "source": "ME8",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME2-(NA)-ME0",
                    "source": "ME2",
                    "target": "ME0",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME6-(NA)-ME1",
                    "source": "ME6",
                    "target": "ME1",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME6-(NA)-ME10",
                    "source": "ME6",
                    "target": "ME10",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME6-(NA)-ME3",
                    "source": "ME6",
                    "target": "ME3",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME10-(NA)-ME16",
                    "source": "ME10",
                    "target": "ME16",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME10-(NA)-ME5",
                    "source": "ME10",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME3-(NA)-ME7",
                    "source": "ME3",
                    "target": "ME7",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME4-(NA)-ME1",
                    "source": "ME4",
                    "target": "ME1",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME4-(NA)-ME2",
                    "source": "ME4",
                    "target": "ME2",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME4-(NA)-ME5",
                    "source": "ME4",
                    "target": "ME5",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME4-(NA)-ME14",
                    "source": "ME4",
                    "target": "ME14",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME5-(NA)-ME3",
                    "source": "ME5",
                    "target": "ME3",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME14-(NA)-ME3",
                    "source": "ME14",
                    "target": "ME3",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME14-(NA)-ME0",
                    "source": "ME14",
                    "target": "ME0",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME0-(NA)-ME7",
                    "source": "ME0",
                    "target": "ME7",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME0-(NA)-ME8",
                    "source": "ME0",
                    "target": "ME8",
                    "interaction": null,
                    "strength": 1
                }
            },
            {
                "data": {
                    "id": "ME0-(NA)-ME15",
                    "source": "ME0",
                    "target": "ME15",
                    "interaction": null,
                    "strength": 1
                }
            }
        ]
    },
            layout:{
                  name: 'cola',
                  padding: 0.5,
                  avoidOverlap: true, 
                  nodeSpacing: function( node ){ return 0.1; },
                  nodeDimensionsIncludeLabels: true
              }
            });
        cy.ready(() => {
                 let groups = cy.nodes().map(nodes => nodes.data().group).flat().filter(Boolean);
                 let uniqGroups = Array.from(new Set(groups));
                 const bb = cy.bubbleSets();
                 
                 for (let i = 0; i < uniqGroups.length; i++) {
                   var tmpgr = uniqGroups[i];
                   const nodes = cy.nodes().filter(function(nodes){
                     let gr = nodes.data().group;
                     if (gr!=null) {
                       let int = gr.includes(tmpgr);
                       return(int);
                     }
                   });
                   let gr = nodes.data().group;
                   console.log(nodes.length)
                   const edges = nodes.connectedEdges();
                   bb.addPath(nodes, edges);
                 }
               });
