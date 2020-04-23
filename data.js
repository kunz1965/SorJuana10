var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.05342844648961176,
        "pitch": -0.037259809963586576,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": -0.00525730075230868,
          "pitch": 0.23075054159766495,
          "rotation": 0,
          "target": "1-accesoprincipal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7456271356632129,
          "pitch": -0.3239044087630809,
          "title": "Oficina en renta, 2o Piso&nbsp;",
          "text": "Tlalnepanta, Sor Juana I. # 10"
        }
      ]
    },
    {
      "id": "1-accesoprincipal",
      "name": "AccesoPrincipal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.08904741081603973,
        "pitch": 0.24092400670866176,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": -0.04913929159252106,
          "pitch": 0.5658390948861083,
          "rotation": 0,
          "target": "2-accesoofna"
        },
        {
          "yaw": 0.6710182460292753,
          "pitch": 0.46198535133864205,
          "rotation": 0,
          "target": "9-estacionamiento"
        },
        {
          "yaw": 2.8720610100378927,
          "pitch": 0.25300537013843183,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7611024885488931,
          "pitch": -0.08428536206791648,
          "title": "Oficina 201",
          "text": "105 m2"
        }
      ]
    },
    {
      "id": "2-accesoofna",
      "name": "AccesoOfna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.9991119493559317,
        "pitch": 0.2185702328903325,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": 0.4876212408264955,
          "pitch": 0.4666909680843041,
          "rotation": 0,
          "target": "3-recepcin"
        },
        {
          "yaw": 1.662466059984407,
          "pitch": 0.707245357389759,
          "rotation": 0,
          "target": "1-accesoprincipal"
        },
        {
          "yaw": 0.905657242370669,
          "pitch": 0.49758980156444466,
          "rotation": 0,
          "target": "9-estacionamiento"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-recepcin",
      "name": "Recepción",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.19951566718477665,
        "pitch": 0.2184851784280415,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": -0.2569587942289271,
          "pitch": 0.2356928898278703,
          "rotation": 0,
          "target": "4-ambiente1"
        },
        {
          "yaw": 0.4191512277896159,
          "pitch": 0.5860981070970563,
          "rotation": 1.5707963267948966,
          "target": "8-baos"
        },
        {
          "yaw": 1.8957963934687276,
          "pitch": 0.4839115892077821,
          "rotation": 0,
          "target": "2-accesoofna"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1275694371986429,
          "pitch": -0.11941652251939061,
          "title": "Oficina 105 m2",
          "text": "2 baños (mujeres/hombres)"
        }
      ]
    },
    {
      "id": "4-ambiente1",
      "name": "Ambiente1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.7533348807128544,
        "pitch": 0.3231643718226067,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": -2.462558397292721,
          "pitch": 0.3528033229228509,
          "rotation": 1.5707963267948966,
          "target": "3-recepcin"
        },
        {
          "yaw": 2.9406514956750724,
          "pitch": 0.29435477111472963,
          "rotation": 0,
          "target": "5-ambiente2"
        },
        {
          "yaw": 2.4066583544788056,
          "pitch": 0.25877504377444893,
          "rotation": 0,
          "target": "6-ambiente3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ambiente2",
      "name": "Ambiente2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.4666084326760185,
        "pitch": 0.2657615331734675,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": 3.008668549666769,
          "pitch": 0.4120770643333458,
          "rotation": 0,
          "target": "4-ambiente1"
        },
        {
          "yaw": 1.9013308532520785,
          "pitch": 0.17196894263564744,
          "rotation": 5.497787143782138,
          "target": "3-recepcin"
        },
        {
          "yaw": -0.15799076031104953,
          "pitch": 0.734552525823478,
          "rotation": 0,
          "target": "7-ambiente4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ambiente3",
      "name": "Ambiente3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.6007663729732204,
        "pitch": 0.33196913989774046,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": -1.5021823711196092,
          "pitch": 0.4954621357217235,
          "rotation": 0,
          "target": "4-ambiente1"
        },
        {
          "yaw": -1.6029368526536913,
          "pitch": 0.12361399737450895,
          "rotation": 0,
          "target": "3-recepcin"
        },
        {
          "yaw": -3.0691473945431174,
          "pitch": 0.23239313724571886,
          "rotation": 1.5707963267948966,
          "target": "7-ambiente4"
        },
        {
          "yaw": -1.777701584324996,
          "pitch": 0.14900161496631803,
          "rotation": 4.71238898038469,
          "target": "8-baos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4674010039731797,
          "pitch": -0.006086317666902374,
          "title": "Privado",
          "text": "Con área secretarial"
        }
      ]
    },
    {
      "id": "7-ambiente4",
      "name": "Ambiente4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.0044547940048982,
        "pitch": 0.268245285819944,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": -0.02835409940265521,
          "pitch": 0.2701711406902234,
          "rotation": 0,
          "target": "4-ambiente1"
        },
        {
          "yaw": 1.718861579436357,
          "pitch": 0.4275665567398832,
          "rotation": 4.71238898038469,
          "target": "6-ambiente3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-baos",
      "name": "Baños",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.6910079079324554,
        "pitch": 0.9413422530163178,
        "fov": 1.3491744678877828
      },
      "linkHotspots": [
        {
          "yaw": 1.520485133277326,
          "pitch": 1.033321058511886,
          "rotation": 5.497787143782138,
          "target": "3-recepcin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-estacionamiento",
      "name": "Estacionamiento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4519282556203059,
          "pitch": 0.152030041535685,
          "rotation": 0,
          "target": "2-accesoofna"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7123904060031911,
          "pitch": -0.07614036633123256,
          "title": "Un lugar de estacionamiento",
          "text": "Estacionamientos primer nivel"
        }
      ]
    }
  ],
  "name": "SorJuana10",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
