import * as React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import {TEAM_ENUM} from 'team-logic/team-static'
import teamInfo from './team-text/team-info'
import genericText from './team-text/generic'

require('./details-styles.css')

type IState = {
    description: string | undefined
    attentionPoints: string[] | undefined
}
type IProps = {
    setOnHover: (callBack: (teamEnum: TEAM_ENUM) => void) => void
}

export default class DetailsPanel extends React.Component<IProps, IState> {
    static propTypes = {
        setOnHover: PropTypes.func,
    }
    state: IState = {
        description: undefined,
        attentionPoints: undefined,
    }

    constructor(props: Readonly<IProps>) {
        super(props)
        this.setDetailText = this.setDetailText.bind(this)
    }

    // TODO: Get widget meta-data to init state.
    // eslint-disable-next-line
    async componentWillMount() {
        // Enable refresh panel data when hovering change
        this.props.setOnHover(this.setDetailText)
    }

    private setDetailText = (teamEnum: TEAM_ENUM): void => {
        this.setState({
            description: teamInfo[teamEnum],
        })
    }

    render(): JSX.Element {
        let detailArea, attentionArea
        if (this.state.description !== undefined) {
            detailArea = (
                <div className="team-details">
                    <ReactMarkdown>{this.state.description}</ReactMarkdown>
                </div>
            )
        } else {
            detailArea = <span className="label label-info">{genericText.PleaseSelectWidget}</span>
        }
        if (this.state.attentionPoints !== undefined) {
            attentionArea = (
                <div>
                    <h4>{genericText.PointOfAttentionTitle}</h4>
                    {this.state.attentionPoints.map((ap) => {
                        ;<p>ICON and {ap}</p>
                    })}
                </div>
            )
        }

        return (
            <div>
                <h4 className="sub-title">{genericText.DetailsAreaTitle}</h4>
                {detailArea}
                {attentionArea}
                <div className="learn-more-link">
                    <i>
                        <a
                            href="https://teamtopologies.com/"
                            target="_blank"
                            rel="noreferrer"
                            title="Learn more from the official Website!"
                        >
                            Learn more at teamtopologies.com
                        </a>
                    </i>
                </div>
            </div>
        )
    }
}
