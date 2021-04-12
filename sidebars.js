//https://docusaurus.io/docs/sidebar#hideable-sidebar

 const Plugins = [
  //El item principal
  //     // type: 'category', //Tipo de item
  //     // label: 'Plugins', //Nombre con el que aparece al costado
  //     // collapsed: true, //Si aparece colapasada por defualt (creo que se aplica solo a cateogries)
  {
    type: 'link',
    label: 'Onyxian Core',
    href: 'OnyxianCore/onyxian-core',
  },
  {
    type: 'link',
    label: 'Damage Potion Effects',
    href: 'DamagePotionEffects/damage-potion-effects',
  },
  {
    type: 'link',
    label: 'Send Console Message',
    href: 'SendConsoleMessage/send-console-message',
  },
];


 const OnyxianCore = [ //El nombre de la var es el nombre de la barra también!
  'OnyxianCore/onyxian-core',
  ];



const damagepotioneffectsbar = [
  {//El item principal
   type: 'category', //Tipo de item
   label: 'Damage Potion Effects', //Nombre con el que aparece al costado
   items: [ //Sub items
     'DamagePotionEffects/damage-potion-effects',
    //  pluginsBar,
     // {pluginsSideBar: pluginsBar},
    //  {
    //    type: 'link',
    //    label: 'Landing page',
    //    href: 'DamagePotionEffects/damage-potion-effects',
    //  }
     // {type: 'doc', id:'Landing Page', items:['DamagePotionEffects/damage-potion-effects']},
       //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'DamagePotionEffects/damage-potion-effects'}
    ]
  },
  {OnyxianCore},
  {Plugins},
  ]

  // ],

//Lista todas las side bars de la isquierda
module.exports = [
  OnyxianCore,
  Plugins,
  damagepotioneffectsbar,
  // coreSideBar,
  // pluginsSideBar,
  // damagepotioneffectsbar:
  // [
  //   // {//El item principal
  //   //   type: 'category', //Tipo de item
  //   //   label: 'Damage Potion Effects', //Nombre con el que aparece al costado
  //   //   items: [ //Sub items
  //   //     'DamagePotionEffects/damage-potion-effects',
  //   //     pluginsBar,
  //   //     // {pluginsSideBar: pluginsBar},
  //   //     {
  //   //       type: 'link',
  //   //       label: 'Landing page',
  //   //       href: 'DamagePotionEffects/damage-potion-effects',
  //   //     }
  //   //     // {type: 'doc', id:'Landing Page', items:['DamagePotionEffects/damage-potion-effects']},
  //   //       //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'DamagePotionEffects/damage-potion-effects'}
  //   //   ],
  //   // },
  //   onyxianCoreBar,
  //   pluginsBar,
  // ],
  // sendconsolemessagebar:
  // [
  //   {//El item principal
  //     type: 'category', //Tipo de item
  //     label: 'Send Console Message', //Nombre con el que aparece al costado
  //     items: [ //Sub items
  //       'SendConsoleMessage/send-console-message', //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'DamagePotionEffects/damage-potion-effects'}
  //     ],
  //   },
  // ],
];

// {
//   type: 'ref',
//   id: 'OnyxianCore/onyxian-core', // Document id (string).
// },



  // someSidebar: {
  //   //Plugins, Docusaurus, y Features son los titulos principales de la sidebar. a su vez tienen adentro el titulo correspondiente a cada documento que listen
  //   Plugins: ['OnyxianCore/doc1'],
  //   Docusaurus: ['doc1', 'doc2', 'doc3'],
  //   Features: ['mdx'],
  // },
  // firstSidebar: {
  //   //NOmbre de la sidebar : docs bindeados a ella.
  //   'Category A': ['doc1'],
  // },

  // firstSidebarB: {
  //   'Category B': ['doc1'],
  // },
  // secondSidebar: {
  //   'Category A': ['doc2'],
  //   'Category B': ['doc3'],
  // },
  // testBar: {
  //   "type": "subcategory",
  //   "label": "Quick Start",
  //   "items": [
  //     "doc1",
  //     "doc2",
  //     "doc3"
  //   ]
  // },


//   coresidebar: [ //Docs es la id de la sidebar
//     {//El item principal
//       type: 'category', //Tipo de item
//       label: 'Guides', //Nombre con el que aparece al costado
//       items: [ //Sub items
//         'OnyxianCore/onyxian-core', //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'doc1'}
//         {
//           Docs: ['StyleGuide', 'doc2', 'doc3', 'mdx'],
//         },
//       ],
//     },
//   ],
// };
