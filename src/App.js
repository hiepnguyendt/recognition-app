import React from 'react';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import AppLayout from '@cloudscape-design/components/app-layout';
import Navigation from './navigation';
//import ContentLayout from '@cloudscape-design/components/content-layout';
//import Container from '@cloudscape-design/components/container';
import Tablelist from './table';
//import { Header} from '@cloudscape-design/components';


export default function App() {
  return (
    <>
      <TopNavigation
        identity={{
          //logo: { src: '/logo.svg', alt: 'Chocolate Factory Logo' },
          title: 'Regconition App',
          href: '/home/index.html',
          subtitle: 'Chocolate Factory',
        }}
        i18nStrings={{
          overflowMenuTriggerText: 'More',
          overflowMenuTitleText: 'All',
        }}
        utilities={[
          {
            type: "menu-dropdown",
            iconName: "settings",
            text: "Settings",
            ariaLabel: "Settings",
            title: "Settings",
            items: [
              {
                id: "mode",
                text: "Dark mode",
                href: "/home/index.html"
              },
              {
                id: "language",
                text: "English",
                href: "/home/index.html"
              },
              {
                id: "sign-out",
                text: "Sign out",
                href: "/home/index.html"

              }
            ]

          },
        ]}
      />
      

      <AppLayout
        headerSelector="#top-nav"
        ariaLabels={{
          navigation: 'Navigation drawer',
          navigationClose: 'Close navigation drawer',
          navigationToggle: 'Open navigation drawer',
          notifications: 'Notifications',
          tools: 'Help panel',
          toolsClose: 'Close help panel',
          toolsToggle: 'Open help panel',
        }}
        content={
          <Tablelist />
        }
        
        navigation={<Navigation />}
      />
    </>
  );
}

