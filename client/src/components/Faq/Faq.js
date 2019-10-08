import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StyledFaq = styled.div`
    margin-top: 50px;
    margin-bottom: 130px;
    .header {
        padding: 20px 0px 40px 0px;
        h2 {
            padding-top: 40px;
            color: ${({ theme }) => {
                return theme.white;
            }};
        }
    }
    .title {
        color: ${({ theme }) => {
            return theme.yellow;
        }};
        padding: 10px 0px;
    }
    .question {
        font-size: 18px;
        color: ${({ theme }) => {
            return theme.white;
        }};
        padding: 15px 0px;
    }
    .answer {
        font-size: 16px;
        padding-bottom: 15px;
        border-bottom: 0.5px solid
            ${({ theme }) => {
                return theme.borderBlue;
            }};
    }
`;

class Faq extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <StyledFaq>
                            <div className="header">
                                <h2 className="subhead">What is Hacktoberfest?</h2>
                                <p>
                                    Have questions? These are the most Frequently Asked Questions about Hacktoberfest.
                                </p>
                            </div>
                            <h2 className="title is-2 highlight">General </h2>
                            <div className="question-answer">
                                <div className="question">
                                    <p>What is Hacktoberfest?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        Hacktoberfest is a month-long celebration of open source software run by
                                        DigitalOcean and DEV.
                                    </p>

                                    <ul>
                                        <li>Hacktoberfest is open to everyone in our global community.</li>
                                        <li>
                                            To participate, four pull requests must be submitted to public GitHub
                                            repositories.
                                        </li>
                                        <li>You can sign up anytime between October 1 and October 31.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>How do I get started?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        First, register at
                                        <a href="https://hacktoberfest.digitalocean.com/register">
                                            {' '}
                                            hacktoberfest.digitalocean.com
                                        </a>
                                        . Then, submit at least four PRs to any public GitHub repository. You can look
                                        for
                                        <Link to="/projects">
                                            open issues labeled <strong>Hacktoberfest</strong>
                                        </Link>
                                        for inspiration. Quality contributions are encouraged!
                                    </p>
                                    <p>
                                        Are you maintaining a repo? Create issues or label existing ones with
                                        <strong>Hacktoberfest</strong> on your GitHub projects to help new contributors
                                        know what to work on. Tag any spam or irrelevant PRs with the{' '}
                                        <strong>invalid</strong> label to disqualify them.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>How do I track my progress?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        Go to <Link to="/progress">hacktoberfest-tracecea.surge.sh/progress</Link> to
                                        check your progress and stats.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>I completed four PRs. When will I receive my T-shirt?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        T-shirts will be awarded on a first-come, first-serve basis to the first 50,000
                                        participants who successfully complete the Hacktoberfest challenge. We’ll start
                                        sending out emails with more details on redeeming T-shirts throughout the month,
                                        so stay tuned.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>How do I get stickers?</p>
                                </div>
                                <div className="answer">
                                    <p>Stickers are included with your T-shirt after completing four PRs.</p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>What happens if I complete fewer than four PRs by the end of the month?</p>
                                </div>
                                <div className="answer">
                                    <p>Unfortunately, you will have to submit at least four PRs to get a T-shirt.</p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>As a maintainer, how should I handle spam PRs?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        We don’t like seeing spam PRs just as much as you, so please give them an
                                        <strong>invalid</strong> label and close them. PRs with an{' '}
                                        <strong>invalid</strong> label won’t be counted toward Hacktoberfest.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>As a maintainer, how do I encourage contributions to my repos?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        Create issues for anything you’d like contributors to help with, making sure to
                                        give them a<strong>Hacktoberfest</strong> label so they’re easier to discover.
                                    </p>
                                    <p>
                                        You can also share issues or repositories on Twitter, using{' '}
                                        <a href="https://twitter.com/hashtag/hacktoberfest">#Hacktoberfest</a> where
                                        we’ll retweet as many as we can for contributors to see.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>
                                        My draft pull requests don’t seem to be counting toward Hacktoberfest. What’s
                                        going on?
                                    </p>
                                </div>
                                <div className="answer">
                                    <p>
                                        For Hacktoberfest, pull requests on GitHub will not be counted until they are
                                        marked as
                                        <strong>ready for review</strong>: those marked as <strong>draft</strong> will
                                        not be counted. Please make sure to relabel any draft PRs as ready for review so
                                        that project maintainers can merge them.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>My pull request was labeled as invalid by a maintainer, why doesn’t it count?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        If a repository maintainer decides a pull request you made was spammy or an
                                        unhelpful contribution to the project, they can add an <strong>invalid</strong>{' '}
                                        label to your PR. This lets us know they do not think your pull request is a
                                        quality contribution, so it will not count toward Hacktoberfest.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>My PR was labeled as invalid, but it isn’t. What should I do?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        If a maintainer labels your pull request as invalid, but you don’t believe this
                                        is correct, please begin a conversation with the maintainer within the PR and
                                        explain your position.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>
                                        My pull request is marked as being on an excluded repository. What does this
                                        mean?
                                    </p>
                                </div>
                                <div className="answer">
                                    <p>
                                        Unfortunately, your pull request was made on a repository that doesn’t align
                                        with the core values of Hacktoberfest. We’ve decided that pull requests made to
                                        this repository will not count toward completing the challenge.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Why is my pull request in a maturing state on my profile?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        In an effort to reduce spam and help maintainers, we’ve introduced a one-week
                                        review period for all pull requests. Once you have submitted four eligible PRs
                                        (ready-to-review, not drafts), the seven-day review window begins. This period
                                        gives maintainers time to identify and label any spammy PRs as{' '}
                                        <strong>invalid</strong>. If your PRs are not marked invalid during that window,
                                        they will allow you to complete the Hacktoberfest challenge. If during this
                                        period any of your PRs are labeled as <strong>invalid</strong>, you will return
                                        to the pending state until you have four eligible PRs, at which point the review
                                        period will start again.
                                    </p>
                                </div>
                            </div>

                            <h2 className="title is-2 highlight">Rules</h2>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Do contributions made outside of GitHub count?</p>
                                </div>
                                <div className="answer">
                                    <p>No, PRs must be made on the GitHub platform.</p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Do issues/commits count?</p>
                                </div>
                                <div className="answer">
                                    <p>No, only PRs count.</p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>
                                        I signed up for Hacktoberfest mid-October. Will PRs that I created earlier in
                                        October count?
                                    </p>
                                </div>
                                <div className="answer">
                                    <p>
                                        Yes, all pull requests created between Oct. 1 and Oct. 31 will count, regardless
                                        of when you register for Hacktoberfest. Pull requests created before Oct. 1 but
                                        merged after do not count.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Do issues have to be labeled Hacktoberfest to count?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        No, any pull request made on a public repository counts, whether it’s attached
                                        to a{' '}
                                        <a href="https://github.com/search?l=&amp;o=desc&amp;q=label%3Ahacktoberfest+state%3Aopen&amp;s=updated&amp;type=Issues">
                                            Hacktoberfest issue
                                        </a>{' '}
                                        or not.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Do PRs made on my own repos count?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        Yes, but we strongly encourage you to make quality contributions to other
                                        repositories.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Can I make PRs to issues/repos that are not listed on the homepage?</p>
                                </div>
                                <div className="answer">
                                    <p>Yes, any public GitHub repo is good for Hacktoberfest.</p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Do multiple PRs to the same repo count?</p>
                                </div>
                                <div className="answer">
                                    <p>Yes, each pull request will count separately.</p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Do PRs have to be accepted/merged?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        No, they will still count unless they are spam, irrelevant, or labeled as
                                        <strong>invalid</strong>.
                                    </p>
                                </div>
                            </div>

                            <h2 className="title is-2 highlight">Shipping </h2>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Will I have to pay anything to receive my T-shirt/stickers?</p>
                                </div>
                                <div className="answer">
                                    <p>T-shirts are free of charge for participants, including shipping costs.</p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Will I have to pay anything/custom tax/duty for the T-shirt?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        We write down a low enough dollar value on the mailed packages that we don’t
                                        expect any issues with customs tax, but we cannot guarantee that – you might
                                        have to pay a small fee depending on your country’s import policies.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>When will my T-shirt be shipped? (International)</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        You will receive an email once your T-shirt is shipped. It can take up to 3-5
                                        weeks after shipment for international orders to be delivered. We intend to ship
                                        all shirts by the end of the first week of November this year.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>How do I return or exchange an item?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        If you believe your order was shipped incorrectly, contact us with the order
                                        number from the email subject line, plus an explanation of the incorrect item
                                        you received. Otherwise, if it’s still within 30 days of the original purchase,
                                        follow the instructions at{' '}
                                        <a href="https://kotisdesign.com/returns">kotisdesign.com/returns</a>. You will
                                        be responsible for shipping the item back to us.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Tracking for my order is not active, is my tracking number correct?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        You may receive a tracking email 2-3 days before tracking becomes active on
                                        DHL’s website. Try again in a few days.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>What countries do you ship to?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        We are able to ship to all countries with the exception of the following: Cuba,
                                        Iran, Libya, North Korea, Sierra Leone, Somalia, Sudan, Syria, and Yemen.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>What T-shirt size should I order?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        You can reference the size charts for the T-shirts on the ordering page. Both
                                        size charts include measurements in inches, and instructions for how to measure
                                        yourself.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>How do I change my T-shirt size?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        Please email{' '}
                                        <a href="mailto:hacktoberfest@digitalocean.com">
                                            Hacktoberfest@DigitalOcean.com
                                        </a>{' '}
                                        within two days of placing your order. Please include your order number and the
                                        T-shirt size you’d like and we’ll get that updated for you.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>How do I change my email address?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        If you are unable to access the email address you used to place your order,
                                        please provide us with a new email address and your order number so we can
                                        update your order information. You can email{' '}
                                        <a href="mailto:hacktoberfest@digitalocean.com">
                                            Hacktoberfest@DigitalOcean.com
                                        </a>{' '}
                                        with your new information.
                                    </p>
                                </div>
                            </div>
                            <div className="question-answer">
                                <div className="question">
                                    <p>Did my T-shirt order go through?</p>
                                </div>
                                <div className="answer">
                                    <p>
                                        If you did not receive an order confirmation email within an hour of placing
                                        your order, we can look up your order using the email address you used. Please
                                        check your spam or junk folders first and if it’s not there, send us an email to{' '}
                                        <a href="mailto:hacktoberfest@digitalocean.com">
                                            Hacktoberfest@DigitalOcean.com
                                        </a>{' '}
                                        to confirm your T-shirt order.
                                    </p>
                                </div>
                            </div>
                        </StyledFaq>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Faq;
