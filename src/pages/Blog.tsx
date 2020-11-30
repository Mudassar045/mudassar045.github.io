import React from 'react'
// import { FeedbackFish } from '@feedback-fish/react'

import Layout from 'layout/Layout'

const Blog = () => {

    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    const [feedbackText, setFeedbackText] = useState('')

    const [category, setCategory] = useState('idea')

    const handleFormSubmit = async () => {

        if (feedbackText.trim().length === 0) {
            window.alert("Please say something, Thanks")
        }

        setSubmit(true)

        await fetch('https://api.feedback.fish/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                projectId: "451ebcb4c17dcc",
                text: feedbackText,
                category: category,
                userId: 'randomUser@feedback.fish',
                metadata: {},
            })
        }).then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                setSuccess(true)
                setSubmit(false)
                setFeedbackText('')
                setTimeout(() => {
                    setSuccess(false)
                }, 3000);
            }, error => {
                console.log(error)
                setSubmit(false)
                setFailure(true)
                setTimeout(() => {
                    setFailure(true)
                }, 3000);
            })

    }

    return (
        <Layout>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-centered">
                            <div className="column is-three-fifths is-narrow content">
                                <h1>My Blog</h1>
                                <p>I'm not a professional blog writer, but what I write, it's based on my personal knowledge (also borrowed from others) and experience.</p>
                                <p>Here list of my cool writings:</p>
                                <ul>
                                    <li><a href="https://gist.github.com/Mudassar045" target="_blank" rel="noopener noreferrer">Github Gist</a></li>
                                </ul>
                                {

                                }
                                <h2>Would love to hear from you!</h2>
                                <p>*Powered by <a href="https://feedback.fish" >feedback.fish</a></p>
                                <textarea
                                    className="textarea"
                                    style={{ marginTop: 10, marginBottom: 10 }}
                                    placeholder="Type your feedback here..."
                                    onChange={(e) => setFeedbackText(e.target.value)} />

                                <div className="control" style={{ margin: '10px 0px' }}>
                                    <label className="radio">
                                        <input type="radio" checked={category === "idea" ? true : false} onChange={(e) => setCategory('idea')} />
                                        <span style={{ padding: '0px 4px' }}>Idea</span>
                                    </label>
                                    <label className="radio">
                                        <input type="radio" checked={category === "issue" ? true : false} onChange={(e) => setCategory('issue')} />
                                        <span style={{ padding: '0px 4px' }}>Issue</span>
                                    </label>
                                    <label className="radio">
                                        <input type="radio" checked={category === "other" ? true : false} onChange={(e) => setCategory('other')} />
                                        <span style={{ padding: '0px 4px' }}>Other</span>
                                    </label>
                                </div>

                                <NavButton onClick={() => handleFormSubmit()}>
                                    <span>Send feedback</span>
                                </NavButton>

                                <p style={{ marginTop: 10 }}>
                                    {
                                        submit ? 'Please hold on....' : success ? 'Thank you!' : failure ? 'Ahhh, please try again!' : ''
                                    }
                                </p>
                                {/* <FeedbackFish projectId="451ebcb4c17dcc">
                                    <NavButton><span>Send feedback</span></NavButton>
                                </FeedbackFish> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Blog

const NavButton: React.FC<any> = ({ children, ...rest }) => {
    return (
        <button {...rest} className="button has-background-grey has-text-white">{children}</button>
    )
}