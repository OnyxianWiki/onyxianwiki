//Lista todas las side bars de la isquierda

const coreSideBar = [
  {//El item principal
    type: 'category', //Tipo de item
    label: 'OnyxianCore', //Nombre con el que aparece al costado
    items: [ //Sub items
      'OnyxianCore/onyxian-core-landing-page', //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'doc1'}
    ],
  },
];

const pluginsSideBar = [
  {//El item principal
    type: 'category', //Tipo de item
    label: 'Plugins', //Nombre con el que aparece al costado
    items: [ //Sub items
      'general-landing-page', //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'doc1'}
    ],
  },
];

module.exports = {
  coreSideBar,
  // pluginsSideBar,
  damagepotioneffectsbar:
    [
      {//El item principal
        type: 'category', //Tipo de item
        label: 'damagepotioneffectsbar', //Nombre con el que aparece al costado
        items: [ //Sub items
          'DamagePotionEffects/damage-potion-effects-landing-page', //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'DamagePotionEffects/damage-potion-effects-landing-page'}
        ],
      },
    ],
  sendconsolemessagebar:
  [
    {//El item principal
      type: 'category', //Tipo de item
      label: 'sendconsolemessagebar', //Nombre con el que aparece al costado
      items: [ //Sub items
        'SendConsoleMessage/send-console-message-landing-page', //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'DamagePotionEffects/damage-potion-effects-landing-page'}
      ],
    },
  ],
};




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
//         'OnyxianCore/onyxian-core-landing-page', //Subitem 1, es lo mismo que decir {type: 'doc',  id: 'doc1'}
//         {
//           Docs: ['StyleGuide', 'doc2', 'doc3', 'mdx'],
//         },
//       ],
//     },
//   ],
// };
