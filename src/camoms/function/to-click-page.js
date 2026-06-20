export class ToClickPage{
    constructor(navigate) {
        this.navigate = navigate;
    }
    handleOnclickToPageKhoe = () => {
        this.navigate('/khoe')
    }
    handleOnclickToPageCaseStudy = () => {
        this.navigate('/case-study')
    }
    handleOnclickToPageCanifa = () => {
        this.navigate('/canifa')
    }
    handleOnclickToPageStarbuck = () => {
        this.navigate('/starbuck')
    }
    handleOnclickToPageTokioMarine = () => {
        this.navigate('/tokio-marine')
    }
    handleOnclickToPageUnicef = () => {
        this.navigate('/unicef')
    }
    handleOnclickToVcca = () => {
        this.navigate('/vcca')
    }
}
