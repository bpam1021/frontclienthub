export const treeData = {
    'Home': {
        label: 'Home',
        index: 0,
        url : '/home',
    },
    'Messages': {
        label: 'Messages',
        index: 1,
        url : '/message',
    },
    
    'Companies': {               // key
      label: 'Companies',
      index: 2, // decide the rendering order on the same level
      url : '/companies',
      nodes: {
        'Company1': {
          label: 'Company1',
          index: 0,
          nodes: {
            'Company1-Tasks': {
              label: 'Tasks',
              index: 0,
              nodes: {} // you can remove the nodes property or leave it as an empty array
            },
            'Company1-Files': {
                label: 'Files',
                index: 0,
                nodes: {} // you can remove the nodes property or leave it as an empty array
            },
            'Company1-Dashboard': {
                label: 'Dashboard',
                index: 0,
                nodes: {} // you can remove the nodes property or leave it as an empty array
            },
          },
        },
        'Company2': {
          label: 'Company2',
          index: 0,
          nodes: {
            'Company2-Tasks': {
              label: 'Tasks',
              index: 0,
              nodes: {} // you can remove the nodes property or leave it as an empty array
            },
            'Company2-Files': {
                label: 'Files',
                index: 0,
                nodes: {} // you can remove the nodes property or leave it as an empty array
            },
            'Company2-Dashboard': {
                label: 'Dashboard',
                index: 0,
                nodes: {} // you can remove the nodes property or leave it as an empty array
            },
          },
        },
      },
    },
    'Tasks': {
        label: 'Tasks',
        index: 3,
        url : '/dashboard',
    },
    'Files': {
        label: 'Files',
        index: 4,
        url : '/files',
    },
    'Dashboards': {
        label: 'Dashboards',
        index: 5,
        url : '/dashboard',
    },
    'Settings': {
        label: 'Settings',
        index: 6,
        url : '/setting',
    },
  };