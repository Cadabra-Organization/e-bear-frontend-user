import React from "react";
import "./Point.css";
import useMediaQuery from "../hooks/useMediaQuery";
import Pagination from "@mui/material/Pagination";

const Point = ({pointPageInfo, pointInfoList}) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="point-container">
            <div className="point-header">
                <div className="point-left-header">
                    <span>eBEAR 포인트</span>
                </div>
                <div className="point-info-btn">
                    <span className="point-right-header">{pointPageInfo.currentPoint} Point</span>
                    <button className="btn-point-charge">포인트 충전</button>
                </div>
            </div>

            <div className="point-list-container">
                <table>
                    <thead>
                    {
                        isMobile ? (
                            <>
                            <th>유형</th>
                            <th>포인트 내역</th>
                            <th>날짜</th>
                            </>
                        ) : (
                            <>
                            <th>유형 및 날짜</th>
                            <th>포인트 내역</th>
                            </>
                        )
                    }
                    </thead>
                    <tbody>
                        {
                            pointInfoList.map(data => { return (
                                <tr>
                                    {
                                        isMobile ? (
                                            <>
                                                <td><p className="date">{data.method}</p></td>
                                                <td><p className="description">{data.point}point</p></td>
                                                <td className="date">{data.date} </td>
                                            </>
                                        ) : (
                                            <>
                                                <td>
                                                    <div className="history-type">
                                                        <span className={`point-icon ${data.method === '충전' ? 'charge' : 'purchase'}`}>{data.method}</span>
                                                        <div className="text-info">
                                                            <p className="date">{data.date}</p>
                                                            <p className="description">{data.description}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="points">{data.point} point</td>
                                            </>
                                        )
                                    }
                                </tr> );
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className="point-pagenation-container">
                <Pagination count={10} color="primary" />
            </div>
        </div>
    )
}

export default Point;