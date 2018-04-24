define(
    [
        'jquery',
        "css!./legend.css"
    ],
    function($, cssContent) {
        'use strict';
        return {
            definition: {
                type: "items",
                component: "accordion",
                items: {

                    appearance: {
                        uses: "settings",
                        items: {
                            myTextBox1: {
                                type: "items",
                                label: "First Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox1",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: true,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox1",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox1",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox1",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox2: {
                                type: "items",
                                label: "Second Legend",
                                items: {

                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox2",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: true,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox2",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox2",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox2",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox3: {
                                type: "items",
                                label: "Third Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox3",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox3",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox3",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox3",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox4: {
                                type: "items",
                                label: "Fourth Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox4",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox4",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox4",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox4",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox5: {
                                type: "items",
                                label: "Fifth Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox5",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox5",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox5",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox5",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox6: {
                                type: "items",
                                label: "Sixth Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox6",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox6",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox6",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox6",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox7: {
                                type: "items",
                                label: "Seventh Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox7",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox7",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox7",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox7",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox8: {
                                type: "items",
                                label: "Eigth Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox8",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox8",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox8",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox8",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox9: {
                                type: "items",
                                label: "Nineth Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox9",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox9",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox9",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox9",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox10: {
                                type: "items",
                                label: "Tenth Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox10",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox10",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox10",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox10",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            },
                            myTextBox11: {
                                type: "items",
                                label: "Eleventh Legend",
                                items: {
                                    visibleBox: {
                                        label: "Is Visible?",
                                        ref: "myVisibleBox11",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    },
                                    textBox: {
                                        label: "Name",
                                        ref: "myTextBox11",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    colorBox: {
                                        label: "Color",
                                        ref: "myColorBox11",
                                        type: "string",
                                        expression: "optional"
                                    },
                                    typeBox: {
                                        label: "Line/Box",
                                        ref: "myTypeBox11",
                                        type: "boolean",
                                        component: "switch",
                                        defaultValue: false,
                                        options: [{
                                                value: true,
                                            },
                                            {
                                                value: false

                                            }
                                        ]
                                    }
                                }
                            }

                        }
                    }
                }
            },
            support: {
                snapshot: true,
                export: true,
                exportData: true
            },

            paint: function($element, layout) {


                $element.empty();
                var legendSpecs = {
                    measureName: [layout.myTextBox1, layout.myTextBox2, layout.myTextBox3, layout.myTextBox4, layout.myTextBox5, layout.myTextBox6, layout.myTextBox7, layout.myTextBox8, layout.myTextBox9, layout.myTextBox10, layout.myTextBox11],
                    background_color: [layout.myColorBox1, layout.myColorBox2, layout.myColorBox3, layout.myColorBox4, layout.myColorBox5, layout.myColorBox6, layout.myColorBox7, layout.myColorBox8, layout.myColorBox9, layout.myColorBox10, layout.myColorBox11],
                    type: [layout.myTypeBox1, layout.myTypeBox2, layout.myTypeBox3, layout.myTypeBox4, layout.myTypeBox5, layout.myTypeBox6, layout.myTypeBox7, layout.myTypeBox8, layout.myTypeBox9, layout.myTypeBox10, layout.myTypeBox11],
                    visible: [layout.myVisibleBox1, layout.myVisibleBox2, layout.myVisibleBox3, layout.myVisibleBox4, layout.myVisibleBox5, layout.myVisibleBox6, layout.myVisibleBox7, layout.myVisibleBox8, layout.myVisibleBox9, layout.myVisibleBox10, layout.myVisibleBox11]

                }
                //console.log(document.getElementById(layout.qInfo.qId), layout.qHyperCube ) ;
                var legend = '\
					<div class="legend" id="' + layout.qInfo.qId + '">';
                var columnWidth = ($element.width()/11 )< 140 ? 140  : ($element.width()/11) ;
                for (var i = 0; i < legendSpecs.measureName.length; i++) {
                    if (legendSpecs.visible[i]) {
                        let legendType = legendSpecs.type[i] ? 'box' : 'line';
                        legend += '<div class="column" style="font-size:12px' + ';width:' + columnWidth + 'px' + '"><div class="' + legendType + '" style="background-color:' + legendSpecs.background_color[i] + '"></div>' + '<b>' + legendSpecs.measureName[i] + '</b>' + '</div>';
                    }
                }

                legend += '</div>';

                $element.html(legend);

            }
        };
    }
);
