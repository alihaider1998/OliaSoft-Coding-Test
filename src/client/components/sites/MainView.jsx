import React, { useEffect, useState } from 'react';
import { FaPollH } from 'react-icons/fa';
import { Table } from '~gui-library';
import { useSelector, useDispatch } from "react-redux";
import { sitesReceived, sitesRequested } from "../../store/entities/sites/sites";
import { oilRigsReceived, oilRigHeading } from "../../store/entities/oil-rigs/oil-rigs";
import axios from 'axios';
import { size } from 'lodash';
import { rigsDetail } from '../../store/entities/oil-rigs/oil-rigs';
import { useHistory } from "react-router-dom";
import { element } from 'prop-types';

export const MainView = () => {
  const history = useHistory()
  const getState = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    // Following we use axios to hit the api and get the data from sites and rigs both 
    axios.get("http://localhost:3000/api/sites").then(
      (response) => {
        dispatch(sitesReceived(response.data))
      }).catch(
        (error) => {
          reject(error)
        });
    axios.get("http://localhost:3000/api/oil-rigs").then(
      (response) => {
        dispatch(oilRigsReceived(response.data))
      }).catch(
        (error) => {
          console.log(error)
        })
  }, [dispatch]);
  // Following is to go to detail page after matching the IDs of oil rigs mentioned in the sites and then we send
  // the matching rigs to a state and display them in details page
  const moreInfo = (item) => {
    dispatch(oilRigHeading(item))
    let SiteSelected = item.oilRigs[0];
    let findMatchingID = getState.entities.oilRigs.list.filter((unit) => { return unit.id == SiteSelected })
    let SelectedRigManufacturer = findMatchingID[0].manufacturer;
    let ListOfRigs = getState.entities.oilRigs.list.filter((unit) => { return unit.manufacturer == SelectedRigManufacturer })
    dispatch(rigsDetail(ListOfRigs))
    history.push("/oil-rigs")
    dispatch(sitesRequested(true))
  }
  // Following is to sort the sites by name
  const sortFunc = () => {
    let getSites = [...getState.entities.sites.list]
    let sortedArray = getSites.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    dispatch(sitesReceived(sortedArray))
  }
  return (
    <div style={{ marginTop: "10px", padding: '25px 50px' }}>
      <h1 style={{ color: "rgb(235, 103, 52)", textAlign: "center" }}>Main View</h1>
      <h1>{ }</h1>
      <Table table={{
        "headers": [
          {
            "cells": [
              {
                "value": "Site Name",
                hasSort: true,
                onSort: function noRefCheck() {
                  sortFunc()
                },
              },
              {
                "value": "Oil Rigs"
              },
              {
                "value": "Country"
              },
              {
                "value": "ID"
              },
              {
                "value": "Details"

              }
            ]
          }
        ],
        "rows":
          getState.entities.sites.list.map((item, i) => {
            return (
              {
                actions: [
                  {
                    icon: <FaPollH color="rgb(235, 103, 52)" size={30} />,
                    primary: true,
                    label: 'Delete',
                    size: 100,
                    onClick: function noRefCheck() { moreInfo(item) }
                  }
                ],
                "cells":
                  [
                    {
                      "value": item.name,

                    },
                    {
                      "value": item.oilRigs.length,
                    },
                    {
                      "value": item.country,
                    },
                    {
                      "value": item.id
                    }
                  ],
                onRowClick: function noRefCheck() { moreInfo(item) }

              }
            )
          })

      }} />
    </div>
  );
}