module.exports = {
  templateExample: (message) => {
    return `
      <mjml>
        <mj-body background-color="#d6dde5">
          <mj-section background-color="#ffffff" padding-bottom="20px" padding-top="20">
            <mj-column width="100%" vertical-align="top">
              <mj-image src="https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png" alt="Ironhack logo" align="center" border="none" width="182px" padding-left="0px" padding-right="0px" padding-bottom="0px" padding-top="0"></mj-image>
            </mj-column>
          </mj-section>
          <mj-section background-color="#ffffff" padding-bottom="20px" padding-top="20">
            <mj-column width="25%" vertical-align="top"></mj-column>
            <mj-column width="50%" vertical-align="top">
              <mj-text align="center" color="#000000" font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif" font-size="13px" padding-left="25px" padding-right="25px" padding-bottom="0px" padding-top="0">
                <p align="center"><span style="color: rgb(106, 138, 162);"><span style="font-weight: bold;"><span style="font-size: 16px;">Ironhack Confirmation Email</span></span>
                  </span>
                </p>
              </mj-text>
              <mj-text align="justify" color="#000000" font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif" font-size="13px" padding-left="25px" padding-right="25px" padding-bottom="0px" padding-top="0">
                <p align="center"><span style="color: rgb(57, 63, 76);">Thanks to join our community! Please confirm your account clicking on the following link:</span></p>
                <a align="center" href="${message}">${message}</a>
                <br>
                <strong align="center">
                  Great to see you creeating awesome webpages you with us!
                </-strong>
              </mj-text>
            </mj-column>
            <mj-column width="25%" vertical-align="top"></mj-column>
          </mj-section>
        </mj-body>
      </mjml>`
    }
}