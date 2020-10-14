import React from 'react';
import {withRouter} from 'react-router-dom'

const withAdminAuthority = (ChildComponent) => {
    class WithAdminAuthority extends React.Component{

        shouldLeave = ()=> {
            if(this.props.isAdmin){
                return
            }
            else{
                this.props.history.push('/')
            }
        }

        componentDidMount (){
            this.shouldLeave();
        }
        componentDidUpdate() {
            this.shouldLeave();
        }
        render (){
            return <> <ChildComponent {...this.props} /></>
        }
    }

    return withRouter(WithAdminAuthority) ;
}
export default withAdminAuthority;