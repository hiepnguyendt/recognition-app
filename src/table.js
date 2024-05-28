import React from "react";
//import { TableProps } from '@cloudscape-design/components/table';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import listfriend from "./listfriend.json";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import Pagination from "@cloudscape-design/components/pagination";
import TextFilter from "@cloudscape-design/components/text-filter";

// import ColumnDefinitions from "./columnDefinitions";
//console.log(listfriend);
const columnDefinitions = [
    {
        id: "id",
        header: "ID",
        cell: item => item.id || "-",
        sortingField: "id",
        isRowHeader: true
    },
    {
        id: "name",
        header: "Tên",
        cell: item => item.name || "-",
        isRowHeader: true
    },
    {
        id: "alt",
        header: "Số điện thoại",
        cell: item => item.alt || "-",
        isRowHeader: "alt",
          
    },
    {
        id: "ct",
        header: "Công ty",
        cell: item => item.ct || "-"
        ,
        isRowHeader: "ct"
    },
    {
        id: "email",
        header: "Email",
        cell: item => item.email || "-",
        isRowHeader: "email"
    }
        
];


export default function Tablelist() {
    const [
    selectedItems,
    setSelectedItems
  ] = React.useState([{ name: "Item 2" }]);
    return (
           
        <Table
            onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
            items={listfriend}
            variant="embedded"
           ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? "item" : "items"
          } selected`,
        itemSelectionLabel: ({ selectedItems }, item) =>
          item.name
      }}
            enableKeyboardNavigation
            columnDefinitions={columnDefinitions}
            stickyColumns={
                {
                    left: ["id", "name", "alt", "ct", "email"]
                }
            }
            stickyHeader={true}
            items={[
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "alt": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "ct": "Bret",
                    "email": "Sincere@april.biz"
                },
                {
                    "id": 2,
                    "name": "Leanne Graham",
                    "ct": "ABC",
                    "alt": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "email": "Sincere@april.biz"
                },
                {
                    "id": 3,
                    "name": "Leanne Graham",
                    "ct": "EFS",
                    "alt": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "email": "Sincere@april.biz"
                }
            ]}
            // //   items={[
            //     {
            //     "id": 1,
            //     "name": "Leanne Graham",
            //     "username": "Bret",
            //     "email": "Sincere@april.biz",
            //     "address": {
            //     "street": "Kulas Light",
            //     "suite": "Apt. 556",
            //     "city": "Gwenborough",
            //     "zipcode": "92998-3874",
            //     "geo": {
            //         "lat": "-37.3159",
            //         "lng": "81.1496"
            //     }
            //     },
            //     "phone": "1-770-736-8031 x56442",
            //     "website": "hildegard.org",
            //     "company": {
            //     "name": "Romaguera-Crona",
            //     "catchPhrase": "Multi-layered client-server neural-net",
            //     "bs": "harness real-time e-markets"
            //     }
            //       },
            //       {
            //     "id": 2,
            //     "name": "Ervin Howell",
            //     "username": "Antonette",
            //     "email": "Shanna@melissa.tv",
            //     "address": {
            //     "street": "Victor Plains",
            //     "suite": "Suite 879",
            //     "city": "Wisokyburgh",
            //     "zipcode": "90566-7771",
            //     "geo": {
            //         "lat": "-43.9509",
            //         "lng": "-34.4618"
            //     }
            //     },
            //     "phone": "010-692-6593 x09125",
            //     "website": "anastasia.net",
            //     "company": {
            //     "name": "Deckow-Crist",
            //     "catchPhrase": "Proactive didactic contingency",
            //     "bs": "synergize scalable supply-chains"
            //     }
            // },
            // {
            //     "id": 3,
            //     "name": "Clementine Bauch",
            //     "username": "Samantha",
            //     "email": "Nathan@yesenia.net",
            //     "address": {
            //     "street": "Douglas Extension",
            //     "suite": "Suite 847",
            //     "city": "McKenziehaven",
            //     "zipcode": "59590-4157",
            //     "geo": {
            //         "lat": "-68.6102",
            //         "lng": "-47.0653"
            //     }
            //     }
            // }
            //   ]}
            loadingText="Loading resources"
            //sortingDisabled
            empty={
                <Box
                    margin={{ vertical: "xs" }}
                    textAlign="center"
                    color="inherit"
                >
                    <SpaceBetween size="m">
                        <b>No resources</b>
                        <Button>Create resource</Button>
                    </SpaceBetween>
                </Box>
            }
            trackBy="name"
            header={<Header variant="awsui-h1-sticky" counter={`(${listfriend.length})`}> Danh sách người quen </Header>}
    />
    );
} 