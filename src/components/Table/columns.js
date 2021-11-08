// import { format } from 'date-fns'

export const ROLES_COLUMNS = [
  {
    Header: 'Role Name',
    // Footer: 'Id',
    accessor: 'roleName',
    // disableFilters: true,
    // sticky: 'left'
},
  {
    Header: 'Description',
    // Footer: 'First Name',
    accessor: 'description',
    // sticky: 'left'
  },
  {
    Header: 'Role Id',
    // Footer: 'Last Name',
    accessor: 'roleId',
    // sticky: 'left'
  },
  {
    Header: 'Feature Name',
    // Footer: 'featureName',
    accessor: 'assignedFeatures[0].featureName',
    // sticky: 'left'
  },
  {
    Header: 'Read',
    // Footer: 'Date of Birth',
    accessor: 'assignedFeatures[0].permissions[0].read',
    Cell: ({ value }) => {
      return value? 'true':'false';
    }
  },
  {
    Header: 'Write',
    // Footer: 'Date of Birth',
    accessor: 'assignedFeatures[0].permissions[0].write',
    Cell: ({ value }) => {
      return value? 'true':'false';
    }
  },
  {
    Header: 'Delete',
    // Footer: 'Date of Birth',
    accessor: 'assignedFeatures[0].permissions[0].delete',
    Cell: ({ value }) => {
      return value? 'true':'false';
    }
  },
//   {
//     Header: 'Country',
//     // Footer: 'Country',
//     accessor: 'country'
//   },
//   {
//     Header: 'Phone',
//     // Footer: 'Phone',
//     accessor: 'phone'
//   },
//   {
//     Header: 'Email',
//     // Footer: 'Email',
//     accessor: 'email'
//   },
//   {
//     Header: 'Age',
//     // Footer: 'Age',
//     accessor: 'age'
//   },
// ]

// export const GROUPED_COLUMNS = [
//   {
//     Header: 'Id',
//     Footer: 'Id',
//     accessor: 'id'
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         Footer: 'First Name',
//         accessor: 'first_name'
//       },
//       {
//         Header: 'Last Name',
//         Footer: 'Last Name',
//         accessor: 'last_name'
//       }
//     ]
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       {
//         Header: 'Date of Birth',
//         Footer: 'Date of Birth',
//         accessor: 'date_of_birth'
//       },
//       {
//         Header: 'Country',
//         Footer: 'Country',
//         accessor: 'country'
//       },
//       {
//         Header: 'Phone',
//         Footer: 'Phone',
//         accessor: 'phone'
//       }
//     ]
//   }
]

export const USER_COLUMNS = [
  {
    Header: 'User Id',
    // Footer: 'Id',
    accessor: 'id',
    // disableFilters: true,
    // sticky: 'left'
},
  {
    Header: 'First Name',
    // Footer: 'First Name',
    accessor: 'name.firstName',
    // sticky: 'left'
  },
  {
    Header: 'Last Name',
    // Footer: 'Last Name',
    accessor: 'name.lastName',
    // sticky: 'left'
  },
  {
    Header: 'Email',
    // Footer: 'featureName',
    accessor: 'email',
    // sticky: 'left'
  },
  {
    Header: 'Contact',
    // Footer: 'Date of Birth',
    accessor: 'contact',
    // Cell: ({ value }) => {
    //   return value? 'true':'false';
    // }
  },
  {
    Header: 'Address',
    // Footer: 'Date of Birth',
    accessor: 'address',
    // Cell: ({ value }) => {
    //   return value? 'true':'false';
    // }
  },
  {
    Header: 'Role',
    // Footer: 'Date of Birth',
    accessor: 'role',
    // Cell: ({ value }) => {
    //   return value? 'true':'false';
    // }
  },
//   {
//     Header: 'Country',
//     // Footer: 'Country',
//     accessor: 'country'
//   },
//   {
//     Header: 'Phone',
//     // Footer: 'Phone',
//     accessor: 'phone'
//   }
]