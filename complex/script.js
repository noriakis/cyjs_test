
    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),
          style: cytoscape.stylesheet()
            .selector('node')
            .css({
                      'content': 'data(label)',
                      'shape' : 'data(shape)',
                      'text-valign': 'bottom',
                      'background-color': 'data(color)',
                      'background-fit': 'cover',
                      'width': 'data(size)',
                      'height': 'data(size)',
                      'font-size' : 'mapData(size, 0, 100, 10, 20)',
                      'text-outline-width': 1,
                      'text-outline-color': '#FFF',
                      'border-color' : '#555',
                      'border-width': 1
                  })
            .selector('edge')
            .css({
                    'curve-style': 'bezier',
                    'width' : 'mapData(width, 0.5, 1, 1, 5)'
                  }),
        'elements':
     {
        "nodes": [
            {
                "data": {
                    "id": " months",
                    "label": " months",
                    "size": 43.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "16S",
                    "label": "16S",
                    "size": 30,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "1H-indole-7-acetic acid",
                    "label": "1H-indole-7-acetic acid",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "5-hydroxyhexanoate",
                    "label": "5-hydroxyhexanoate",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "5alpha-androstan-3beta,17alpha-diol disulfate",
                    "label": "5alpha-androstan-3beta,17alpha-diol disulfate",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "acid",
                    "label": "acid",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "acids",
                    "label": "acids",
                    "size": 23.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "age",
                    "label": "age",
                    "size": 23.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Akkermansia",
                    "label": "Akkermansia",
                    "size": 16.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila",
                    "label": "Akkermansia muciniphila",
                    "size": 10,
                    "color": "#CCEBC5",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Antibiotics",
                    "label": "Antibiotics",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "bacteria",
                    "label": "bacteria",
                    "size": 16.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Bacteroides",
                    "label": "Bacteroides",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "CIN",
                    "label": "CIN",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Compared",
                    "label": "Compared",
                    "size": 20,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "controls",
                    "label": "controls",
                    "size": 36.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "COVID19",
                    "label": "COVID19",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "CRC",
                    "label": "CRC",
                    "size": 10,
                    "color": "#B3CDE3",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "decreased",
                    "label": "decreased",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "DNA",
                    "label": "DNA",
                    "size": 16.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Eczema",
                    "label": "Eczema",
                    "size": 20,
                    "color": "#B3CDE3",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "enriched",
                    "label": "enriched",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "exposed",
                    "label": "exposed",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Findings",
                    "label": "Findings",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "flora",
                    "label": "flora",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "gene",
                    "label": "gene",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "genera",
                    "label": "genera",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "increased",
                    "label": "increased",
                    "size": 30,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "individuals",
                    "label": "individuals",
                    "size": 23.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "involved",
                    "label": "involved",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "levels",
                    "label": "levels",
                    "size": 16.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "metabolism",
                    "label": "metabolism",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "metabolites",
                    "label": "metabolites",
                    "size": 13.3333,
                    "color": "#B3CDE3",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "mice",
                    "label": "mice",
                    "size": 36.6667,
                    "color": "#B3CDE3",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "microhabitats",
                    "label": "microhabitats",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "muciniphila",
                    "label": "muciniphila",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "normal",
                    "label": "normal",
                    "size": 26.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "observed",
                    "label": "observed",
                    "size": 20,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "p-cresol glucuronide*",
                    "label": "p-cresol glucuronide*",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "p-cresol sulfate",
                    "label": "p-cresol sulfate",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "phenylacetate",
                    "label": "phenylacetate",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "phenylacetylglutamate",
                    "label": "phenylacetylglutamate",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "phenylacetylglutamine",
                    "label": "phenylacetylglutamine",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "potential",
                    "label": "potential",
                    "size": 26.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "predicted",
                    "label": "predicted",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Prenatal",
                    "label": "Prenatal",
                    "size": 16.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "provide",
                    "label": "provide",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Raffinose",
                    "label": "Raffinose",
                    "size": 13.3333,
                    "color": "#B3CDE3",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "revealed",
                    "label": "revealed",
                    "size": 13.3333,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "RYGB",
                    "label": "RYGB",
                    "size": 16.6667,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "shotgun",
                    "label": "shotgun",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "species",
                    "label": "species",
                    "size": 50,
                    "color": "#B3CDE3",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "specific",
                    "label": "specific",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "spp",
                    "label": "spp",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Stool",
                    "label": "Stool",
                    "size": 33.3333,
                    "color": "#B3CDE3",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Streptococcus",
                    "label": "Streptococcus",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "studies",
                    "label": "studies",
                    "size": 10,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "Taxonomic",
                    "label": "Taxonomic",
                    "size": 20,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "weight",
                    "label": "weight",
                    "size": 30,
                    "color": "#FBB4AE",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "X - 11843",
                    "label": "X - 11843",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "X - 11850",
                    "label": "X - 11850",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "X - 12013",
                    "label": "X - 12013",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "X - 12216",
                    "label": "X - 12216",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "X - 12261",
                    "label": "X - 12261",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "X - 22509",
                    "label": "X - 22509",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            },
            {
                "data": {
                    "id": "X - 23997",
                    "label": "X - 23997",
                    "size": 10,
                    "color": "#DECBE4",
                    "shape": "circle"
                }
            }
        ],
        "edges": [
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-1H-indole-7-acetic acid",
                    "source": "Akkermansia muciniphila",
                    "target": "1H-indole-7-acetic acid",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-5alpha-androstan-3beta,17alpha-diol disulfate",
                    "source": "Akkermansia muciniphila",
                    "target": "5alpha-androstan-3beta,17alpha-diol disulfate",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-5-hydroxyhexanoate",
                    "source": "Akkermansia muciniphila",
                    "target": "5-hydroxyhexanoate",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-X - 22509",
                    "source": "Akkermansia muciniphila",
                    "target": "X - 22509",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-phenylacetylglutamate",
                    "source": "Akkermansia muciniphila",
                    "target": "phenylacetylglutamate",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-X - 12261",
                    "source": "Akkermansia muciniphila",
                    "target": "X - 12261",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-phenylacetate",
                    "source": "Akkermansia muciniphila",
                    "target": "phenylacetate",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-X - 12013",
                    "source": "Akkermansia muciniphila",
                    "target": "X - 12013",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-X - 12216",
                    "source": "Akkermansia muciniphila",
                    "target": "X - 12216",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-phenylacetylglutamine",
                    "source": "Akkermansia muciniphila",
                    "target": "phenylacetylglutamine",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-X - 11843",
                    "source": "Akkermansia muciniphila",
                    "target": "X - 11843",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-X - 23997",
                    "source": "Akkermansia muciniphila",
                    "target": "X - 23997",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-X - 11850",
                    "source": "Akkermansia muciniphila",
                    "target": "X - 11850",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-p-cresol glucuronide*",
                    "source": "Akkermansia muciniphila",
                    "target": "p-cresol glucuronide*",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia muciniphila-(NA)-p-cresol sulfate",
                    "source": "Akkermansia muciniphila",
                    "target": "p-cresol sulfate",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "weight-(NA)-Akkermansia muciniphila",
                    "source": "weight",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Taxonomic-(NA)-Akkermansia muciniphila",
                    "source": "Taxonomic",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "studies-(NA)-Akkermansia muciniphila",
                    "source": "studies",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "studies-(NA)-Taxonomic",
                    "source": "studies",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.3749,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3749
                }
            },
            {
                "data": {
                    "id": "Streptococcus-(NA)-Akkermansia muciniphila",
                    "source": "Streptococcus",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Streptococcus-(NA)-Taxonomic",
                    "source": "Streptococcus",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.4293,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4293
                }
            },
            {
                "data": {
                    "id": "Stool-(NA)-Akkermansia muciniphila",
                    "source": "Stool",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Stool-(NA)-studies",
                    "source": "Stool",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3221,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3221
                }
            },
            {
                "data": {
                    "id": "spp-(NA)-Akkermansia muciniphila",
                    "source": "spp",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "specific-(NA)-Akkermansia muciniphila",
                    "source": "specific",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "specific-(NA)-Taxonomic",
                    "source": "specific",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.6496,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6496
                }
            },
            {
                "data": {
                    "id": "specific-(NA)-studies",
                    "source": "specific",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3663,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3663
                }
            },
            {
                "data": {
                    "id": "specific-(NA)-Streptococcus",
                    "source": "specific",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.4494,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4494
                }
            },
            {
                "data": {
                    "id": "species-(NA)-Akkermansia muciniphila",
                    "source": "species",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "species-(NA)-Streptococcus",
                    "source": "species",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.3838,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3838
                }
            },
            {
                "data": {
                    "id": "species-(NA)-Stool",
                    "source": "species",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.4201,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4201
                }
            },
            {
                "data": {
                    "id": "species-(NA)-spp",
                    "source": "species",
                    "target": "spp",
                    "interaction": null,
                    "edgeColor": 0.4311,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4311
                }
            },
            {
                "data": {
                    "id": "shotgun-(NA)-Akkermansia muciniphila",
                    "source": "shotgun",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "RYGB-(NA)-Akkermansia muciniphila",
                    "source": "RYGB",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "RYGB-(NA)-weight",
                    "source": "RYGB",
                    "target": "weight",
                    "interaction": null,
                    "edgeColor": 0.3579,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3579
                }
            },
            {
                "data": {
                    "id": "RYGB-(NA)-spp",
                    "source": "RYGB",
                    "target": "spp",
                    "interaction": null,
                    "edgeColor": 0.3374,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3374
                }
            },
            {
                "data": {
                    "id": "revealed-(NA)-Akkermansia muciniphila",
                    "source": "revealed",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "revealed-(NA)-studies",
                    "source": "revealed",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3302,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3302
                }
            },
            {
                "data": {
                    "id": "revealed-(NA)-Stool",
                    "source": "revealed",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.6833,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6833
                }
            },
            {
                "data": {
                    "id": "revealed-(NA)-species",
                    "source": "revealed",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.3426,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3426
                }
            },
            {
                "data": {
                    "id": "Raffinose-(NA)-Akkermansia muciniphila",
                    "source": "Raffinose",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Raffinose-(NA)-studies",
                    "source": "Raffinose",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3864,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3864
                }
            },
            {
                "data": {
                    "id": "Raffinose-(NA)-Streptococcus",
                    "source": "Raffinose",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "Raffinose-(NA)-specific",
                    "source": "Raffinose",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.7038,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.7038
                }
            },
            {
                "data": {
                    "id": "Raffinose-(NA)-revealed",
                    "source": "Raffinose",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.3062,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3062
                }
            },
            {
                "data": {
                    "id": "provide-(NA)-Akkermansia muciniphila",
                    "source": "provide",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "provide-(NA)-Taxonomic",
                    "source": "provide",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.4293,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4293
                }
            },
            {
                "data": {
                    "id": "provide-(NA)-studies",
                    "source": "provide",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.5279,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5279
                }
            },
            {
                "data": {
                    "id": "provide-(NA)-Streptococcus",
                    "source": "provide",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.4494,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4494
                }
            },
            {
                "data": {
                    "id": "provide-(NA)-specific",
                    "source": "provide",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.3118,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3118
                }
            },
            {
                "data": {
                    "id": "provide-(NA)-species",
                    "source": "provide",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.3176,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3176
                }
            },
            {
                "data": {
                    "id": "provide-(NA)-shotgun",
                    "source": "provide",
                    "target": "shotgun",
                    "interaction": null,
                    "edgeColor": 0.3663,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3663
                }
            },
            {
                "data": {
                    "id": "Prenatal-(NA)-Akkermansia muciniphila",
                    "source": "Prenatal",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "predicted-(NA)-Akkermansia muciniphila",
                    "source": "predicted",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "potential-(NA)-Akkermansia muciniphila",
                    "source": "potential",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "potential-(NA)-specific",
                    "source": "potential",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.3333,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3333
                }
            },
            {
                "data": {
                    "id": "potential-(NA)-RYGB",
                    "source": "potential",
                    "target": "RYGB",
                    "interaction": null,
                    "edgeColor": 0.3133,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3133
                }
            },
            {
                "data": {
                    "id": "potential-(NA)-revealed",
                    "source": "potential",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.3851,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3851
                }
            },
            {
                "data": {
                    "id": "potential-(NA)-predicted",
                    "source": "potential",
                    "target": "predicted",
                    "interaction": null,
                    "edgeColor": 0.5608,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5608
                }
            },
            {
                "data": {
                    "id": "observed-(NA)-Akkermansia muciniphila",
                    "source": "observed",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "observed-(NA)-Taxonomic",
                    "source": "observed",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.4221,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4221
                }
            },
            {
                "data": {
                    "id": "observed-(NA)-Streptococcus",
                    "source": "observed",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.3517,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3517
                }
            },
            {
                "data": {
                    "id": "normal-(NA)-Akkermansia muciniphila",
                    "source": "normal",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "normal-(NA)-specific",
                    "source": "normal",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.3485,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3485
                }
            },
            {
                "data": {
                    "id": "muciniphila-(NA)-Akkermansia muciniphila",
                    "source": "muciniphila",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "muciniphila-(NA)-Streptococcus",
                    "source": "muciniphila",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.3118,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3118
                }
            },
            {
                "data": {
                    "id": "muciniphila-(NA)-Stool",
                    "source": "muciniphila",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.3756,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3756
                }
            },
            {
                "data": {
                    "id": "muciniphila-(NA)-species",
                    "source": "muciniphila",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.3838,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3838
                }
            },
            {
                "data": {
                    "id": "muciniphila-(NA)-revealed",
                    "source": "muciniphila",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.4122,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4122
                }
            },
            {
                "data": {
                    "id": "microhabitats-(NA)-Akkermansia muciniphila",
                    "source": "microhabitats",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "mice-(NA)-Akkermansia muciniphila",
                    "source": "mice",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "metabolites-(NA)-Akkermansia muciniphila",
                    "source": "metabolites",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "metabolites-(NA)-studies",
                    "source": "metabolites",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3063,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3063
                }
            },
            {
                "data": {
                    "id": "metabolites-(NA)-Stool",
                    "source": "metabolites",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.8599,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.8599
                }
            },
            {
                "data": {
                    "id": "metabolites-(NA)-species",
                    "source": "metabolites",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.4961,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4961
                }
            },
            {
                "data": {
                    "id": "metabolites-(NA)-revealed",
                    "source": "metabolites",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.7115,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.7115
                }
            },
            {
                "data": {
                    "id": "metabolites-(NA)-predicted",
                    "source": "metabolites",
                    "target": "predicted",
                    "interaction": null,
                    "edgeColor": 0.3426,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3426
                }
            },
            {
                "data": {
                    "id": "metabolites-(NA)-potential",
                    "source": "metabolites",
                    "target": "potential",
                    "interaction": null,
                    "edgeColor": 0.4635,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4635
                }
            },
            {
                "data": {
                    "id": "metabolism-(NA)-Akkermansia muciniphila",
                    "source": "metabolism",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "metabolism-(NA)-Streptococcus",
                    "source": "metabolism",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.4122,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4122
                }
            },
            {
                "data": {
                    "id": "metabolism-(NA)-Raffinose",
                    "source": "metabolism",
                    "target": "Raffinose",
                    "interaction": null,
                    "edgeColor": 0.3062,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3062
                }
            },
            {
                "data": {
                    "id": "metabolism-(NA)-microhabitats",
                    "source": "metabolism",
                    "target": "microhabitats",
                    "interaction": null,
                    "edgeColor": 0.4725,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4725
                }
            },
            {
                "data": {
                    "id": "levels-(NA)-Akkermansia muciniphila",
                    "source": "levels",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "levels-(NA)-provide",
                    "source": "levels",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.38,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.38
                }
            },
            {
                "data": {
                    "id": "levels-(NA)-normal",
                    "source": "levels",
                    "target": "normal",
                    "interaction": null,
                    "edgeColor": 0.5618,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5618
                }
            },
            {
                "data": {
                    "id": "involved-(NA)-Akkermansia muciniphila",
                    "source": "involved",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "involved-(NA)-mice",
                    "source": "involved",
                    "target": "mice",
                    "interaction": null,
                    "edgeColor": 0.3113,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3113
                }
            },
            {
                "data": {
                    "id": "individuals-(NA)-Akkermansia muciniphila",
                    "source": "individuals",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "individuals-(NA)-predicted",
                    "source": "individuals",
                    "target": "predicted",
                    "interaction": null,
                    "edgeColor": 0.3562,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3562
                }
            },
            {
                "data": {
                    "id": "individuals-(NA)-potential",
                    "source": "individuals",
                    "target": "potential",
                    "interaction": null,
                    "edgeColor": 0.539,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.539
                }
            },
            {
                "data": {
                    "id": "individuals-(NA)-metabolites",
                    "source": "individuals",
                    "target": "metabolites",
                    "interaction": null,
                    "edgeColor": 0.5357,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5357
                }
            },
            {
                "data": {
                    "id": "increased-(NA)-Akkermansia muciniphila",
                    "source": "increased",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "increased-(NA)-spp",
                    "source": "increased",
                    "target": "spp",
                    "interaction": null,
                    "edgeColor": 0.4505,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4505
                }
            },
            {
                "data": {
                    "id": "increased-(NA)-RYGB",
                    "source": "increased",
                    "target": "RYGB",
                    "interaction": null,
                    "edgeColor": 0.3755,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3755
                }
            },
            {
                "data": {
                    "id": "increased-(NA)-potential",
                    "source": "increased",
                    "target": "potential",
                    "interaction": null,
                    "edgeColor": 0.4987,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4987
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-Akkermansia muciniphila",
                    "source": "genera",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-Taxonomic",
                    "source": "genera",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.4897,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4897
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-Streptococcus",
                    "source": "genera",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.5508,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5508
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-specific",
                    "source": "genera",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.3366,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3366
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-species",
                    "source": "genera",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.4343,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4343
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-provide",
                    "source": "genera",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.3366,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3366
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-observed",
                    "source": "genera",
                    "target": "observed",
                    "interaction": null,
                    "edgeColor": 0.5396,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5396
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-muciniphila",
                    "source": "genera",
                    "target": "muciniphila",
                    "interaction": null,
                    "edgeColor": 0.3366,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3366
                }
            },
            {
                "data": {
                    "id": "genera-(NA)-metabolites",
                    "source": "genera",
                    "target": "metabolites",
                    "interaction": null,
                    "edgeColor": 0.3227,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3227
                }
            },
            {
                "data": {
                    "id": "gene-(NA)-Akkermansia muciniphila",
                    "source": "gene",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "gene-(NA)-Stool",
                    "source": "gene",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.3427,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3427
                }
            },
            {
                "data": {
                    "id": "gene-(NA)-metabolites",
                    "source": "gene",
                    "target": "metabolites",
                    "interaction": null,
                    "edgeColor": 0.4564,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4564
                }
            },
            {
                "data": {
                    "id": "flora-(NA)-Akkermansia muciniphila",
                    "source": "flora",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "flora-(NA)-specific",
                    "source": "flora",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "flora-(NA)-provide",
                    "source": "flora",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "flora-(NA)-normal",
                    "source": "flora",
                    "target": "normal",
                    "interaction": null,
                    "edgeColor": 0.7702,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.7702
                }
            },
            {
                "data": {
                    "id": "Findings-(NA)-Akkermansia muciniphila",
                    "source": "Findings",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "exposed-(NA)-Akkermansia muciniphila",
                    "source": "exposed",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "exposed-(NA)-Prenatal",
                    "source": "exposed",
                    "target": "Prenatal",
                    "interaction": null,
                    "edgeColor": 0.3915,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3915
                }
            },
            {
                "data": {
                    "id": "enriched-(NA)-Akkermansia muciniphila",
                    "source": "enriched",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "enriched-(NA)-Taxonomic",
                    "source": "enriched",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.4897,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4897
                }
            },
            {
                "data": {
                    "id": "enriched-(NA)-Streptococcus",
                    "source": "enriched",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.765,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.765
                }
            },
            {
                "data": {
                    "id": "enriched-(NA)-specific",
                    "source": "enriched",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.4437,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4437
                }
            },
            {
                "data": {
                    "id": "enriched-(NA)-observed",
                    "source": "enriched",
                    "target": "observed",
                    "interaction": null,
                    "edgeColor": 0.4451,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4451
                }
            },
            {
                "data": {
                    "id": "enriched-(NA)-metabolism",
                    "source": "enriched",
                    "target": "metabolism",
                    "interaction": null,
                    "edgeColor": 0.3062,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3062
                }
            },
            {
                "data": {
                    "id": "enriched-(NA)-genera",
                    "source": "enriched",
                    "target": "genera",
                    "interaction": null,
                    "edgeColor": 0.6667,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6667
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-Akkermansia muciniphila",
                    "source": "Eczema",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-Taxonomic",
                    "source": "Eczema",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.5448,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5448
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-Streptococcus",
                    "source": "Eczema",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.7038,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.7038
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-specific",
                    "source": "Eczema",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-provide",
                    "source": "Eczema",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-observed",
                    "source": "Eczema",
                    "target": "observed",
                    "interaction": null,
                    "edgeColor": 0.6003,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6003
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-muciniphila",
                    "source": "Eczema",
                    "target": "muciniphila",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-genera",
                    "source": "Eczema",
                    "target": "genera",
                    "interaction": null,
                    "edgeColor": 0.8333,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.8333
                }
            },
            {
                "data": {
                    "id": "Eczema-(NA)-enriched",
                    "source": "Eczema",
                    "target": "enriched",
                    "interaction": null,
                    "edgeColor": 0.8333,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.8333
                }
            },
            {
                "data": {
                    "id": "DNA-(NA)-Akkermansia muciniphila",
                    "source": "DNA",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "DNA-(NA)-Taxonomic",
                    "source": "DNA",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.4484,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4484
                }
            },
            {
                "data": {
                    "id": "DNA-(NA)-studies",
                    "source": "DNA",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3044,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3044
                }
            },
            {
                "data": {
                    "id": "DNA-(NA)-shotgun",
                    "source": "DNA",
                    "target": "shotgun",
                    "interaction": null,
                    "edgeColor": 0.6068,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6068
                }
            },
            {
                "data": {
                    "id": "DNA-(NA)-levels",
                    "source": "DNA",
                    "target": "levels",
                    "interaction": null,
                    "edgeColor": 0.3682,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3682
                }
            },
            {
                "data": {
                    "id": "DNA-(NA)-gene",
                    "source": "DNA",
                    "target": "gene",
                    "interaction": null,
                    "edgeColor": 0.4586,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4586
                }
            },
            {
                "data": {
                    "id": "decreased-(NA)-Akkermansia muciniphila",
                    "source": "decreased",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "decreased-(NA)-microhabitats",
                    "source": "decreased",
                    "target": "microhabitats",
                    "interaction": null,
                    "edgeColor": 0.4516,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4516
                }
            },
            {
                "data": {
                    "id": "decreased-(NA)-metabolism",
                    "source": "decreased",
                    "target": "metabolism",
                    "interaction": null,
                    "edgeColor": 0.365,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.365
                }
            },
            {
                "data": {
                    "id": "decreased-(NA)-individuals",
                    "source": "decreased",
                    "target": "individuals",
                    "interaction": null,
                    "edgeColor": 0.3927,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3927
                }
            },
            {
                "data": {
                    "id": "decreased-(NA)-increased",
                    "source": "decreased",
                    "target": "increased",
                    "interaction": null,
                    "edgeColor": 0.3243,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3243
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-Akkermansia muciniphila",
                    "source": "CRC",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-studies",
                    "source": "CRC",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3864,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3864
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-Stool",
                    "source": "CRC",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.9298,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.9298
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-species",
                    "source": "CRC",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.4748,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4748
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-revealed",
                    "source": "CRC",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.6634,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6634
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-provide",
                    "source": "CRC",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-muciniphila",
                    "source": "CRC",
                    "target": "muciniphila",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-metabolites",
                    "source": "CRC",
                    "target": "metabolites",
                    "interaction": null,
                    "edgeColor": 0.8714,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.8714
                }
            },
            {
                "data": {
                    "id": "CRC-(NA)-gene",
                    "source": "CRC",
                    "target": "gene",
                    "interaction": null,
                    "edgeColor": 0.3536,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3536
                }
            },
            {
                "data": {
                    "id": "COVID19-(NA)-Akkermansia muciniphila",
                    "source": "COVID19",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "COVID19-(NA)-involved",
                    "source": "COVID19",
                    "target": "involved",
                    "interaction": null,
                    "edgeColor": 0.5867,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5867
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-Akkermansia muciniphila",
                    "source": "controls",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-Streptococcus",
                    "source": "controls",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.4003,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4003
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-species",
                    "source": "controls",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.3227,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3227
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-provide",
                    "source": "controls",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.6275,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6275
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-predicted",
                    "source": "controls",
                    "target": "predicted",
                    "interaction": null,
                    "edgeColor": 0.3215,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3215
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-genera",
                    "source": "controls",
                    "target": "genera",
                    "interaction": null,
                    "edgeColor": 0.3536,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3536
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-Findings",
                    "source": "controls",
                    "target": "Findings",
                    "interaction": null,
                    "edgeColor": 0.4702,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4702
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-enriched",
                    "source": "controls",
                    "target": "enriched",
                    "interaction": null,
                    "edgeColor": 0.4125,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4125
                }
            },
            {
                "data": {
                    "id": "controls-(NA)-Eczema",
                    "source": "controls",
                    "target": "Eczema",
                    "interaction": null,
                    "edgeColor": 0.3536,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3536
                }
            },
            {
                "data": {
                    "id": "Compared-(NA)-Akkermansia muciniphila",
                    "source": "Compared",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Compared-(NA)-CRC",
                    "source": "Compared",
                    "target": "CRC",
                    "interaction": null,
                    "edgeColor": 0.3043,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3043
                }
            },
            {
                "data": {
                    "id": "CIN-(NA)-Akkermansia muciniphila",
                    "source": "CIN",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "CIN-(NA)-Taxonomic",
                    "source": "CIN",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.5448,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5448
                }
            },
            {
                "data": {
                    "id": "CIN-(NA)-studies",
                    "source": "CIN",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3864,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3864
                }
            },
            {
                "data": {
                    "id": "CIN-(NA)-specific",
                    "source": "CIN",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "CIN-(NA)-shotgun",
                    "source": "CIN",
                    "target": "shotgun",
                    "interaction": null,
                    "edgeColor": 0.3864,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3864
                }
            },
            {
                "data": {
                    "id": "CIN-(NA)-provide",
                    "source": "CIN",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.3289,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3289
                }
            },
            {
                "data": {
                    "id": "CIN-(NA)-gene",
                    "source": "CIN",
                    "target": "gene",
                    "interaction": null,
                    "edgeColor": 0.3536,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3536
                }
            },
            {
                "data": {
                    "id": "CIN-(NA)-DNA",
                    "source": "CIN",
                    "target": "DNA",
                    "interaction": null,
                    "edgeColor": 0.8966,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.8966
                }
            },
            {
                "data": {
                    "id": "Bacteroides-(NA)-Akkermansia muciniphila",
                    "source": "Bacteroides",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Bacteroides-(NA)-Taxonomic",
                    "source": "Bacteroides",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.3183,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3183
                }
            },
            {
                "data": {
                    "id": "Bacteroides-(NA)-Streptococcus",
                    "source": "Bacteroides",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.5508,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5508
                }
            },
            {
                "data": {
                    "id": "Bacteroides-(NA)-specific",
                    "source": "Bacteroides",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.6579,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6579
                }
            },
            {
                "data": {
                    "id": "Bacteroides-(NA)-revealed",
                    "source": "Bacteroides",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.3062,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3062
                }
            },
            {
                "data": {
                    "id": "Bacteroides-(NA)-Raffinose",
                    "source": "Bacteroides",
                    "target": "Raffinose",
                    "interaction": null,
                    "edgeColor": 0.8333,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.8333
                }
            },
            {
                "data": {
                    "id": "Bacteroides-(NA)-metabolism",
                    "source": "Bacteroides",
                    "target": "metabolism",
                    "interaction": null,
                    "edgeColor": 0.4082,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4082
                }
            },
            {
                "data": {
                    "id": "Bacteroides-(NA)-enriched",
                    "source": "Bacteroides",
                    "target": "enriched",
                    "interaction": null,
                    "edgeColor": 0.5,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-Akkermansia muciniphila",
                    "source": "bacteria",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-Stool",
                    "source": "bacteria",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.4963,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4963
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-specific",
                    "source": "bacteria",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.3427,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3427
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-revealed",
                    "source": "bacteria",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.5251,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5251
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-provide",
                    "source": "bacteria",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.3427,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3427
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-normal",
                    "source": "bacteria",
                    "target": "normal",
                    "interaction": null,
                    "edgeColor": 0.63,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.63
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-metabolites",
                    "source": "bacteria",
                    "target": "metabolites",
                    "interaction": null,
                    "edgeColor": 0.4689,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4689
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-flora",
                    "source": "bacteria",
                    "target": "flora",
                    "interaction": null,
                    "edgeColor": 0.5675,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5675
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-CRC",
                    "source": "bacteria",
                    "target": "CRC",
                    "interaction": null,
                    "edgeColor": 0.5675,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5675
                }
            },
            {
                "data": {
                    "id": "bacteria-(NA)-Bacteroides",
                    "source": "bacteria",
                    "target": "Bacteroides",
                    "interaction": null,
                    "edgeColor": 0.3405,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3405
                }
            },
            {
                "data": {
                    "id": "Antibiotics-(NA)-Akkermansia muciniphila",
                    "source": "Antibiotics",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Antibiotics-(NA)-Prenatal",
                    "source": "Antibiotics",
                    "target": "Prenatal",
                    "interaction": null,
                    "edgeColor": 0.684,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.684
                }
            },
            {
                "data": {
                    "id": "Antibiotics-(NA)-exposed",
                    "source": "Antibiotics",
                    "target": "exposed",
                    "interaction": null,
                    "edgeColor": 0.8132,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.8132
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-Akkermansia muciniphila",
                    "source": "Akkermansia",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-Stool",
                    "source": "Akkermansia",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.3104,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3104
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-spp",
                    "source": "Akkermansia",
                    "target": "spp",
                    "interaction": null,
                    "edgeColor": 0.4267,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4267
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-species",
                    "source": "Akkermansia",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.4182,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4182
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-revealed",
                    "source": "Akkermansia",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.3904,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3904
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-muciniphila",
                    "source": "Akkermansia",
                    "target": "muciniphila",
                    "interaction": null,
                    "edgeColor": 0.7199,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.7199
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-genera",
                    "source": "Akkermansia",
                    "target": "genera",
                    "interaction": null,
                    "edgeColor": 0.3188,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3188
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-enriched",
                    "source": "Akkermansia",
                    "target": "enriched",
                    "interaction": null,
                    "edgeColor": 0.3188,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3188
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-Eczema",
                    "source": "Akkermansia",
                    "target": "Eczema",
                    "interaction": null,
                    "edgeColor": 0.3268,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3268
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-CRC",
                    "source": "Akkermansia",
                    "target": "CRC",
                    "interaction": null,
                    "edgeColor": 0.3268,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3268
                }
            },
            {
                "data": {
                    "id": "Akkermansia-(NA)-Compared",
                    "source": "Akkermansia",
                    "target": "Compared",
                    "interaction": null,
                    "edgeColor": 0.3609,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3609
                }
            },
            {
                "data": {
                    "id": "age-(NA)-Akkermansia muciniphila",
                    "source": "age",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "age-(NA)-Prenatal",
                    "source": "age",
                    "target": "Prenatal",
                    "interaction": null,
                    "edgeColor": 0.5481,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5481
                }
            },
            {
                "data": {
                    "id": "age-(NA)-exposed",
                    "source": "age",
                    "target": "exposed",
                    "interaction": null,
                    "edgeColor": 0.4132,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4132
                }
            },
            {
                "data": {
                    "id": "age-(NA)-Antibiotics",
                    "source": "age",
                    "target": "Antibiotics",
                    "interaction": null,
                    "edgeColor": 0.5407,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5407
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-Akkermansia muciniphila",
                    "source": "acids",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-studies",
                    "source": "acids",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.4911,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4911
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-Streptococcus",
                    "source": "acids",
                    "target": "Streptococcus",
                    "interaction": null,
                    "edgeColor": 0.3305,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3305
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-Stool",
                    "source": "acids",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.5916,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5916
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-spp",
                    "source": "acids",
                    "target": "spp",
                    "interaction": null,
                    "edgeColor": 0.3094,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3094
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-species",
                    "source": "acids",
                    "target": "species",
                    "interaction": null,
                    "edgeColor": 0.6877,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6877
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-revealed",
                    "source": "acids",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.5482,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5482
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-Raffinose",
                    "source": "acids",
                    "target": "Raffinose",
                    "interaction": null,
                    "edgeColor": 0.4282,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4282
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-provide",
                    "source": "acids",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.3305,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3305
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-muciniphila",
                    "source": "acids",
                    "target": "muciniphila",
                    "interaction": null,
                    "edgeColor": 0.3305,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3305
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-metabolites",
                    "source": "acids",
                    "target": "metabolites",
                    "interaction": null,
                    "edgeColor": 0.6106,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6106
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-CRC",
                    "source": "acids",
                    "target": "CRC",
                    "interaction": null,
                    "edgeColor": 0.6666,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6666
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-Bacteroides",
                    "source": "acids",
                    "target": "Bacteroides",
                    "interaction": null,
                    "edgeColor": 0.3795,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3795
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-bacteria",
                    "source": "acids",
                    "target": "bacteria",
                    "interaction": null,
                    "edgeColor": 0.4595,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4595
                }
            },
            {
                "data": {
                    "id": "acids-(NA)-Akkermansia",
                    "source": "acids",
                    "target": "Akkermansia",
                    "interaction": null,
                    "edgeColor": 0.3071,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3071
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-Akkermansia muciniphila",
                    "source": "acid",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-studies",
                    "source": "acid",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3243,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3243
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-Stool",
                    "source": "acid",
                    "target": "Stool",
                    "interaction": null,
                    "edgeColor": 0.6019,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6019
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-revealed",
                    "source": "acid",
                    "target": "revealed",
                    "interaction": null,
                    "edgeColor": 0.8297,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.8297
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-potential",
                    "source": "acid",
                    "target": "potential",
                    "interaction": null,
                    "edgeColor": 0.376,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.376
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-microhabitats",
                    "source": "acid",
                    "target": "microhabitats",
                    "interaction": null,
                    "edgeColor": 0.4516,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4516
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-metabolites",
                    "source": "acid",
                    "target": "metabolites",
                    "interaction": null,
                    "edgeColor": 0.6716,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6716
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-metabolism",
                    "source": "acid",
                    "target": "metabolism",
                    "interaction": null,
                    "edgeColor": 0.4812,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4812
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-decreased",
                    "source": "acid",
                    "target": "decreased",
                    "interaction": null,
                    "edgeColor": 0.3524,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3524
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-CRC",
                    "source": "acid",
                    "target": "CRC",
                    "interaction": null,
                    "edgeColor": 0.6232,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6232
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-Bacteroides",
                    "source": "acid",
                    "target": "Bacteroides",
                    "interaction": null,
                    "edgeColor": 0.3929,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3929
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-bacteria",
                    "source": "acid",
                    "target": "bacteria",
                    "interaction": null,
                    "edgeColor": 0.6048,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6048
                }
            },
            {
                "data": {
                    "id": "acid-(NA)-acids",
                    "source": "acid",
                    "target": "acids",
                    "interaction": null,
                    "edgeColor": 0.5253,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5253
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-Akkermansia muciniphila",
                    "source": "16S",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-Taxonomic",
                    "source": "16S",
                    "target": "Taxonomic",
                    "interaction": null,
                    "edgeColor": 0.5582,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5582
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-studies",
                    "source": "16S",
                    "target": "studies",
                    "interaction": null,
                    "edgeColor": 0.3052,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3052
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-specific",
                    "source": "16S",
                    "target": "specific",
                    "interaction": null,
                    "edgeColor": 0.6704,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6704
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-provide",
                    "source": "16S",
                    "target": "provide",
                    "interaction": null,
                    "edgeColor": 0.4651,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4651
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-normal",
                    "source": "16S",
                    "target": "normal",
                    "interaction": null,
                    "edgeColor": 0.5199,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5199
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-genera",
                    "source": "16S",
                    "target": "genera",
                    "interaction": null,
                    "edgeColor": 0.3423,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3423
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-gene",
                    "source": "16S",
                    "target": "gene",
                    "interaction": null,
                    "edgeColor": 0.4841,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4841
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-flora",
                    "source": "16S",
                    "target": "flora",
                    "interaction": null,
                    "edgeColor": 0.4907,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4907
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-DNA",
                    "source": "16S",
                    "target": "DNA",
                    "interaction": null,
                    "edgeColor": 0.4506,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4506
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-CIN",
                    "source": "16S",
                    "target": "CIN",
                    "interaction": null,
                    "edgeColor": 0.4907,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4907
                }
            },
            {
                "data": {
                    "id": "16S-(NA)-bacteria",
                    "source": "16S",
                    "target": "bacteria",
                    "interaction": null,
                    "edgeColor": 0.4265,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4265
                }
            },
            {
                "data": {
                    "id": " months-(NA)-Akkermansia muciniphila",
                    "source": " months",
                    "target": "Akkermansia muciniphila",
                    "interaction": null,
                    "edgeColor": "NA",
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.2
                }
            },
            {
                "data": {
                    "id": " months-(NA)-spp",
                    "source": " months",
                    "target": "spp",
                    "interaction": null,
                    "edgeColor": 0.3947,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3947
                }
            },
            {
                "data": {
                    "id": " months-(NA)-RYGB",
                    "source": " months",
                    "target": "RYGB",
                    "interaction": null,
                    "edgeColor": 0.364,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.364
                }
            },
            {
                "data": {
                    "id": " months-(NA)-Prenatal",
                    "source": " months",
                    "target": "Prenatal",
                    "interaction": null,
                    "edgeColor": 0.5393,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5393
                }
            },
            {
                "data": {
                    "id": " months-(NA)-increased",
                    "source": " months",
                    "target": "increased",
                    "interaction": null,
                    "edgeColor": 0.3457,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.3457
                }
            },
            {
                "data": {
                    "id": " months-(NA)-exposed",
                    "source": " months",
                    "target": "exposed",
                    "interaction": null,
                    "edgeColor": 0.5885,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.5885
                }
            },
            {
                "data": {
                    "id": " months-(NA)-Antibiotics",
                    "source": " months",
                    "target": "Antibiotics",
                    "interaction": null,
                    "edgeColor": 0.6653,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.6653
                }
            },
            {
                "data": {
                    "id": " months-(NA)-age",
                    "source": " months",
                    "target": "age",
                    "interaction": null,
                    "edgeColor": 0.4114,
                    "strength": 1,
                    "interaction.1": null,
                    "width": 0.4114
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
    
