import React from 'react';
import SideNavigation from '@cloudscape-design/components/side-navigation';

// const items: SideNavigationProps['items'] = [
//   // More pages got added as part of the workshop.
//   { type: 'link', text: 'Dashboard', href: '/home/index.html' },
// ];
const items = [
  { type: 'link', text: 'Danh sách người quen', href: '/home/index.html' },
  { type: 'link', text: 'Thêm người quen', href: '/home/service.html' }
];
export default function Navigation() {
  return (
    <>
          <SideNavigation
                          
        header={{ href: '/home/index.html', text: 'Service' }}
        items={items}
      />
    </>
  );
}
