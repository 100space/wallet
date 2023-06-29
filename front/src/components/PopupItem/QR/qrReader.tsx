import React, { Component } from "react"
import QrReader from "react-qr-scanner"

class Test extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            delay: 100,
            result: "No result",
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data: any) {
        console.log(data)
    }
    handleError(err: any) {
        console.error(err)
    }
    render() {
        const previewStyle = {
            height: 240,
            width: 320,
        }

        return (
            <div>
                <QrReader
                    // delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
            </div>
        )
    }
}
export default Test
