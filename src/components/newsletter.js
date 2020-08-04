import React from "react"

const Newsletter = () => {
  return (
    <>
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />

        <h4 className="text-gray-800 text-xl my-2">Newsletter</h4>
        <p>Subscribe to stay up-to-date and get all the latest news and updates directly to your inbox. I'll never spam you!</p>

        <div id="mc_embed_signup">
            <form action="https://vanheije.us12.list-manage.com/subscribe/post?u=ad3d60f21465218a2b99d8b40&amp;id=55e8df606c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input type="text" name="b_ad3d60f21465218a2b99d8b40_55e8df606c" tabindex="-1" value="" />
                    </div>
                    <div className="clear ml-2">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-4 rounded-full" />
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Newsletter