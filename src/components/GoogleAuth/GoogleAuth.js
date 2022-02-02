import React from "react";
import { connect } from 'react-redux'
import { googleAuthLogin, googleAuthLogout } from '../../actions'


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '920586133762-9ct7q4sslh5qm79g8648ii655br9kkmb.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const infos  = {
                userId: this.auth.currentUser.get().getBasicProfile().getId(),
                nomeCompleto: this.auth.currentUser.get().getBasicProfile().getName(),
                isSignedIn: this.auth.isSignedIn.get()
            }
            this.props.googleAuthLogin(infos)
        } else {
            this.props.googleAuthLogout()
        }
    }

    renderAuthButton() {
        
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={() => this.auth.signOut()} className="ui white google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            ) 
        } else {
            return (
                <button onClick={() => this.auth.signIn()} className="ui white google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            )
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    render () {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.googleAuthReducer.isSignedIn }
}

export default connect(mapStateToProps, { googleAuthLogin, googleAuthLogout })(GoogleAuth)