import React, { useEffect } from 'react';
import { FaPollH } from 'react-icons/fa';
import { Table } from '~gui-library';
import { useSelector, useDispatch } from "react-redux";
import { oilRigsReceived } from "../../store/entities/oil-rigs/oil-rigs";
import axios from 'axios';
import { size } from 'lodash';
import { rigsDetail } from '../../store/entities/oil-rigs/oil-rigs';

export const detailPage = () => {
    const getState = useSelector((state) => state);
    const dispatch = useDispatch();
    // Following is to sort the oil rigs by name
    const sortFunc = () => {
        let getSites = [...getState.entities.oilRigs.detailPageRecords]
        let sortedArray = getSites.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        dispatch(rigsDetail(sortedArray))
    }

    return (
        <div style={{ marginTop: "10px", padding: '25px 50px' }}>
            <h1 style={{ color: "rgb(235, 103, 52)", textAlign: "center" }}>Oil Rigs List</h1>
            <p style={{ fontSize: "140%" }}>Site Name: <b>{getState.entities.oilRigs.rigHeading.name} </b></p>
            <p style={{ fontSize: "142%", marginTop: "-15px" }}>Country: <b>{getState.entities.oilRigs.rigHeading.country}</b></p>
            <Table table={{
                "headers": [
                    {
                        "cells": [
                            {
                                "value": "Rig Name",
                                hasSort: true,
                                onSort: function noRefCheck() {
                                    sortFunc()
                                },
                            },
                            {
                                "value": "Manufacturer"
                            },
                            {
                                "value": "ID"
                            }
                        ]
                    }
                ],
                "rows":
                    getState.entities.oilRigs.detailPageRecords.map((item, i) => {
                        return (
                            {
                                "cells":
                                    [
                                        {
                                            "value": item.name,
                                        },
                                        {
                                            "value": item.manufacturer,
                                        },
                                        {
                                            "value": item.id
                                        }
                                    ]
                            }
                        )
                    })

            }} />
        </div>
    );
}