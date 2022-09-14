# Solution to Coding Test

## Instructions

## Clone the repo by using the following command:

git clone https://github.com/alihaider1998/OliaSoft-Coding-Test

## Run the following command to install node modules.
Kindly use --legacy-peer-dep while installing the node modules, otherwise it gives errors.

npm i --legacy-peer-dep


## Running the Client

npm run client

## Similar for server:

npm run server


´´´´´´´´´´´´´´´´´´´´´´

# Tasks Done Details

## Main View
- In the main view(home page), we can see the details of Oil Sites including it's Name, Country Name, Number of Oil rigs it has, and its ID, after hitting   the api using axios and storing the data in Redux State.
- A loader has been used when the page first mounts.
- We have the top bar on the top by which we can navigate to Chart View and come back.
- We can sort the Oil Sites by name.
- We can click on the site of interest or click the details button in front of the site to go to its detail page.

## Details Page
- This page open when you click any site of interest on the main view. We can view the oil rigs which having the same IDs as of the IDs of the list oil       rigs in the Oil Site that we clicked on the main view.
- A loader has been used when we visit the detials page until the records are being fetched.
- This list can also be sorted by Rig Name.
- A Back button also becomes visible in the top bar on the right side when you come to details page. It has been conditionally rendered.

## Chart View
- We can visit this page using the Top Bar.
- Here we have used the Apex Chart Library and have visualized the Oil sites on X-Axis and Number of Oil Rigs they contain on the Y-Axis. It shows in a Bar   Chart that which Oil Site contains how many Oil Rigs.
- Here also you have the Back Button visible in the top bar.
