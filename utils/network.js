// obtained from react native tutorials

import React from 'react';

const network = {
    //     post(options) {
    //         const fetchOptions = {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         };

    //         fetch(url, fetchOptions)
    //             .then((response) => {
    //                 return response.json()
    //             })
    //             .then((responseData) => {
    //                 callback(responseData);
    //             });
    //     },
    // };

    post(options) {
        var url = options.url,
            data = options.data || {},
            extra = options.extra || {},
            success = options.success,
            fail = options.fail

        data = Object.assign(data, extra)

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                console.log(responseData)
                // callback(responseData);
            });

        // wx.request({
        //     method: 'POST',
        //     url: url,
        //     data: data,
        //     header: {
        //         'content-type': 'application/x-www-form-urlencoded' //application/json
        //     },
        //     success: function (res) {
        //         console.log(res)
        //         if (res.statusCode == 200) {
        //             if (success) {
        //                 success(res.data)
        //             }
        //         }
        //         else {
        //             if (fail) {
        //                 fail(res)
        //             }
        //         }
        //     },
        //     fail: function (res) {
        //         console.log(res)
        //         if (fail) {
        //             fail(res)
        //         }
        //     }
        // })
    }
}

export default network;