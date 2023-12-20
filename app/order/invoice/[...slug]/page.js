'use client';

import React, { useRef } from 'react';
import { SITE_NAME, formattedPrice } from "@/utils";
import ReactToPrint from 'react-to-print';

export default function Invoice() {
    const componentRef = useRef();

    return (
        <div>
            <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8 text-sm" ref={componentRef}>
                <h1 className="font-bold text-2xl my-4 text-center text-blue-600">{SITE_NAME}</h1>
                <hr className="mb-2" />
                <div className="flex justify-between mb-6">
                    <h1 className="text-md font-bold">Invoice</h1>
                    <div className="text-gray-700 text-right">
                        <div>Date: 01/05/2023</div>
                        <div>Invoice #: SMI12345</div>
                    </div>
                </div>
                {/* <div className="mb-8">
                <h2 className="text-sm font-bold mb-4">Bill To:</h2>
                <p><small className="text-gray-700 mb-2">John Doe</small></p>
                <small className="text-gray-700 mb-2">123 Main St.</small>
                <small className="text-gray-700 mb-2">Anytown, USA 12345</small>
                <p><small className="text-gray-700">johndoe@example.com</small></p>
            </div> */}
                <table className="w-full mb-8">
                    <thead>
                        <tr>
                            <th className="text-left font-bold text-gray-700">Description</th>
                            <th className="text-right font-bold text-gray-700">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-left text-gray-700">1 x Pasta</td>
                            <td className="text-right text-gray-700">{formattedPrice(100)}</td>
                        </tr>
                        <tr>
                            <td className="text-left text-gray-700">1 x Coffee</td>
                            <td className="text-right text-gray-700">{formattedPrice(50)}</td>
                        </tr>
                        <tr>
                            <td className="text-left text-gray-700">5 x Tea</td>
                            <td className="text-right text-gray-700">{formattedPrice(50)}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-left font-bold text-gray-700">Total</td>
                            <td className="text-right font-bold text-gray-700">{formattedPrice(200)}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="text-gray-700 mb-2">Thank you for your business!</div>
                <div className="text-gray-700 text-sm">Please remit payment within 30 days.</div>
            </div>

            <div className="py-4 max-w-md mx-auto mt-4 text-right">
                <ReactToPrint
                    trigger={() => <button className="btn btn-primary"><a href="#">Print this out!</a></button>}
                    content={() => componentRef.current}
                />
            </div>

        </div>

    )
}