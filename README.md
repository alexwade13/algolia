# algolia

In this project, I intended to demonstrate how with just a few short hours with the Algolia app and documentation, one can create something of value. I created a small search application for different airports around the world. Given more time, I was looking into adding to the project with a geo-search capability and map to allow users to search for airports based off of longitude and latitude.

I was very impressed with the ease of implementation of the application. Adding new widgets was quite easy and the dashboard was well documented. I would have liked to see the api documentation a little more exposed. While the dashboard is quite well made, a good api (and encouragement to use it) allows for far greater levels of customization to a specific company's needs without having to rely on the support team.

Question 1: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George


Response:
Hello,

Absolutely George! I'd be happy to help:

Records are the individual data points in the database. For example, if you have an address book application, a single record would contain: someone's name, phone number, address, and any other such data that application uses. The database would consist of many records.

Indexing is the process used to put this data inside of the Algoia application. Once your data is properly indexed into the Algoia application, it is accessible to use.

Custom ranking can be used to "tie break" in searches. To go back to our address book application example, it would probably make more sense to have someone's name as a higher tiered custom ranking than an address, as when you search, you are probably looking for someone's name before you are looking for a specific address. Having the custom ranking for someone's name higher would have the name "Joe" show higher than "Johannesburg" when searching for "Jo"

If you need any more help or clarification, please don't hesitate to ask again! Alternatively, if you'd prefer to get on a phone call or a link to some tutorials or documentation, we can do one of those as well.

Thanks, Alex Wade



Question 2: Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

Response:

Hello,

Thanks Matt, feedback is always appreciated. I'll be sure to discuss this with the team to see what can be done. I understand that changes to our application can be frustrating and are not always beneficial to all of clients. But if the team decides to keep the current implementation, I'd suggest using our api. It is more suited to quick development and customization, and allows individual users to greatly enhance their development process. If you have any questions on how to use it or need assistance, please feel free to email. Sorry for the inconvenience, I hope we can continue to assist you in every way

Thanks, Alex

Question 3: Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

Response:

Hi,

Thanks for reaching out Leo, I'm glad you found Algolia. Algolia is fairly simple to set up. While it depends on how big your website is, you can get something up and running within a couple of hours, easily. 

The high-level process consists of putting your data in the Algolia application, and configuring it for proper search. Here's a quick tutorial on how to do that https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/#overview. Once that is done, you can use the instant search project detailed here https://community.algolia.com/#instantsearch to implement on with your data on your website. And that's it! Let me know if you have any questions and I'll be sure to answer them to the best I can. 

Thanks, Alex


## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.
