# wabao
a shopping website

# Design

#### List of new features comparing to the previous design:

(1) Redesign of home page and product information pages implemented by bootstrap



(2) Used jQuery embedding multiple dynamic content into website, including the ability of searching all the sub-pages with search-bar, integrating carousel feature to display promoting products in the home page, using advanced features of HTML5 local storage to accomplish sign up, log in system(which is able to enroll multiple accounts), adding products to favorite list and shopping cart, combining another advanced feature of HTML5 drag and drop to enable user to delete products from shopping cart and favorite list by dragging products image into "trash" icon, functionalize the log in system with popover a model, achieving the function of form validating in the sign up page automatically and instantaneously, incorporating the advanced features of HTML5 geolocation with Baidu map api to gain user's location information and generate map 



(3) Integration with some external web service\--Baidu map api and verification code.



(4) Responsive web in different screen sizes in both PC, phones and tablets by using bootstrap grid system, design specific css file(moble.css) with the change of viewport(phones and tablets) 



(5) Advanced features of HTML5 like local storage, drag and drop, geolocation embed in the website 



(6) Consideration of website indexing in two different angles(both outside and inside of the website),adding each html file with "meta" tag in elaboration of main content of the page, and searching-bar and navigation-bar to get entrance of different pages in the website



(7) Supporting print feature to print the whole pages by adding a printing button in the footer 



> Justification for design decisions:

![images](https://github.com/DAZHAdazha/wabao/blob/master/images/1.png)



> The final result shows above, which can be switched for different promoting pictures automatically or press the "\<,\>" button,or the three status bar. It is easy to see the Carousel images are clear for user to see, and can cause more attempt for user to click on. Besides, it can save more space in displaying more pictures. Furthermore, It is achieved by embedding bootstrap, which can raise the flexibility for responsive web.(Displaying for different size of screens)

#### ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/2.png)

#### Justification of the Search-bar for indexing inside the website:

> The final result of search-bar is above. In order to achieve indexing for the website, the search-bar system is integrated to all web pages, which can allow users more conveniently to jump to any sub-page they want.(In consideration for users, the input is bound with "enter" in keyboard, thus user can either click "Search" button or press "enter" to getting result) To elaborate the usage of this system, examples are given: user can type in any full product name that showed in the home page(e.g. BlackWidow, iphone XR, Bose NC700\...), or they can enter the category of product(e.g. phone, keyboard, headphone\...), besides they could also search it by the seller name(e.g. razer, logitech, apple\...). Moreover, all the keywords are **not** case sensitive, which means it is the same that user type in "RAzeR" or "razer". If the keywords are found, the website will automatically jump in specific page, otherwise it will jump to the "404 not found" page. And this feature is embedding by using jQuery(In the file of "main.js").

#### Justification for using advanced features in HTML5 "local storage" and "drag and drop" to achieve the functionality of adding/removing products in shopping cart/favorite list

> 
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/3.png)
>
> 
>
> The final result is showed above. It is clear for user to click the button of "Add to cart" / "Remove cart" to add / remove the product of shopping cart. And click the star to toggle for the favorite list. Once the users had added the products to cart/favorite list, they can check out in the navigation system "favorite"/ "cart". (as pictures shown below)
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/4.png)
>
> Once the had added user add the products, the results are showed below:
>
> 
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/5.png)
>
> Once the user had deleted the products, the results are showed below:
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/6.png)
>
> The advanced HTML5 feature local storage and jQuery as well are used to support this function working.(in the file of "favorite.js" and "cart.js")
>
> Besides, another advanced HTML5 feature drag and drop is also implemented in the favorite/cart page. There is a dustbin on the right side of website, users could drag the images of the products to the dustbin and to delete it. These functions above are useful for people to use and bring them great convenience.
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/7.jpg)
>
> 
>
> Drag to delete

#### Justification for embedding web service verification code and advanced HTML5 features local storage to enroll new accounts.(also using jQuery)

> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/8.png)
>
> In the sign up page, user should type in correct information according to the hints.(examples are shown below)
>
> If user had entered the invalid information, the status bar below will appear and the input border will become red in order to prompt them to enter correct information.

![images](https://github.com/DAZHAdazha/wabao/blob/master/images/9.jpg)



> However, if they type in valid information, the status bar will be hidden and the input border will become green to prompt them that is correct.

![images](https://github.com/DAZHAdazha/wabao/blob/master/images/10.jpg)

> One more thing need to be stressed that, all this information-validation are all instantaneous, which can help users know whether they type it wrongly in any time without lag. Once the user had filled the form, as soon as they press the "sign up" button, the website will automatically check each blank is correct, if all are fine, it will tell the user had signed up and jump to the user page, otherwise it can not be registered. And each input box is bound with the "enter" in the keyboard which allow users to more easily using the website.(all the code could be found in the file "signup.js", and also using jQuery)
>
> Moreover, the verification code is also put into the sign up page as an external web service. The final result is shown below:

![images](https://github.com/DAZHAdazha/wabao/blob/master/images/11.jpg)

> The verification code is generated randomly with 4 different digits through web service, once the verification image is clicked or the "refresh" button is pressed, the image will be fresh, and the validation will also be check again.(and this apart also using jQuery, and can be found in the file of "signup.js")

#### Justification for log in system which also embed with advanced HTML5 features local storage and model in bootstrap:

> The final result for model is shown below:
>
> The sign up system is integrated in the navigation system for all pages, and it is achieved with bootstrap. However, the original model in bootstrap is not in the central of the page, to make user feel more comfortable, specific code had been add to fix the modal on the center of the screen.(it could be found in the file of "main.js")
>
> In elaboration of sign up system, the user information(including username, password, age, phone number) had been stored in local storage, and multiple accounts could be registered to log in. On the both input box , the "enter" on the keyboard is also bound to the sign up button, which could
>
> be more convenient for user to log in. After the account has been logged in, the browser will jump to the user page which will display user information and location.
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/12.jpg)

#### Justification for user page which could display account information like username, phone number, age. And showing locations by using advanced HTML5 features geolocation and an external web service Baidu Map API:

> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/13.jpg)
>
> When logging in the user page, the browser would ask the user for getting the location information, as the picture shown below:
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/14.jpg)
>
> By confirmation of this request, the website could get the location of longitude and latitude coordinate values ,and displaying they on the page. What's more, the Baidu Map API will get the coordinate data and display a map on the right side of the page. And user could hit the button log out to leaving the page.

#### Justification for the responsive web by largely using bootstrap and designing specific CSS file for smaller screen size(in the file of "mobile.css")

> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/15.jpg)
>
> In order to achieving responsive web, the whole website is embed with grid system in bootstrap, which is designing for better flexibility for mobile devices. The layout of home page is shown below:

#### In the previous edition of the website, one row is only for 5 items, while in this time, one row is improved for 6 items which could provide more information in less space. Furthermore, in consideration of adjusting the screen size, the "mobile.css" is working if the width of screen size is under 1024px(tablets or phones). The home page will only show 2 items in "mobile.css" file, which is shown below:

> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/16.jpg)
>
> Besides, in consideration of the screen size of mobile devices, some features are adjust to adapt different viewport.

#### Justification for the to-top button:

> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/17.jpg)
>
> In consideration of better using experience, the to-top button is added on the right corner in some pages(home page, favorite page, cart page\...). By pressing the button, user could back to the top of the page, which could save their time rolling the idler wheel on their mouse, more easily to go through the information all around the whole page. The to-top button is showed as below:

#### Justification for the indexing for outside the website

> In order to achieve indexing not only inside the website(which is already introduced before as search-bar) but also for outside the website(for example search engine like Google and Baidu), every HTML page had been added the meta tag filled with main content of the specific page which could tell the search engine robots the main ideas for the page.

#### Justification for the print button

> To add the functionality of print the present page, a printing button is added on every page in the footer area, by pressing the button, it will trigger the printing function on user's computer system. Moreover, there is a specific CSS file that custom for the print style sheet named "print.css" in the file, which has been imported to all pages, once the user have pressed the print button, the specific style sheet will be applied.
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/18.jpg)

# Evaluation:

#### Evaluation of changes for lay out in home page:



> In the previous version of the website, each row is only allowed to display 5 items, while during the justification in the present version of the website, one row is allowed to show 6 items at a time, which could provide more information to the user within using less space. According to the comparison images shown below, it is clear to see that present design is more tight and more effective in delivering information.
>
> Justified

![images](https://github.com/DAZHAdazha/wabao/blob/master/images/19.jpg)

#### Evaluation of changes for font size in each page:

> !![images](https://github.com/DAZHAdazha/wabao/blob/master/images/20.jpg)
>
> Justified

#### According to previous website feedback, "the font size in the web content is slightly large ". Hence, in present edition, the font size had been adjust a little smaller while still clear for people to see. Besides, it has been under research that most famous website had taken the font size around 20px (Google is exactly 20px, and Baidu, Github, Zhihu are around 20px), which could not effect user experience but displaying more information with limited space.

3.  Evaluation of changes for carousel images in home page:

![images](https://github.com/DAZHAdazha/wabao/blob/master/images/21.jpg)

> The final result is shown above. In the previous edition of the website, three promoting pages are shown simultaneously which could waste a lot of space, while in the present edition, the promoting pages are justified into carousel images, which has the animation to switch between three images automatically or by pressing the "\<" , "\>", three status bar below. This change could also save substantial space while add more interaction between users as well as dynamic contents.
>
> Moreover, the left and right side bar had also been justified. The left side bar had been removed due to its redundancy and it is the repetition for content below. While the right side bar had been remake into a new independent page when user log in to the user page. It is clear to see that these changes make the website more simple and distinct.

#### Evaluation of changes for the attribute "placeholder":

> The final result is shown below:

![images](https://github.com/DAZHAdazha/wabao/blob/master/images/22.jpg)

> 

> In the previous version of the website, each input box did not has the attribute "placeholder", while in the present version, the hint information is added to every input box in order to prompt the user to type in the correct value, which could promote the using experience for the people who use this website.

#### Evaluation of changes for adding the vacant functionality:

> In the previous version of the website, due to the limitation of only using HTML and CSS without JavaScript, thus many features are vacant such as the search-bar, favorite list, shopping cart, sign up, log in, log out\... However, the present edition had completed all the functionality which largely improved the interaction between users and the website(all the features had been introduced in design part).

#### Evaluation of testing for different browsers:

> All the website had been build for Chrome, hence all the features are perfectly working in it. During further tests, the Firefox and 360 speed browser are both available for all the functions as the same as Chrome.(all the browsers above are working perfectly, but might import warning in the console due to using the local storage as cookies which is normal and inevitable)
>
> However, due to the limitations of Edge and IE browser which are not support for advanced HTML5 feature local storage, thus these two browsers are not available for any features that using this technology are not working(including sign up, log in, shopping cart, favorite list, showing user information, and might import error in the console), but other functions are working well like search-bar, model box, carousel, validation code, Baidu Map API\...
>
> To go through the tests more carefully, the other computer system is also tested like Ubuntu, it is
>
> also working perfectly in Firefox and Chrome in Linux system.



#### Evaluation of testing for responsive web:

> In the original version of the website, the contrast to present version shows as below:
>
> ![images](https://github.com/DAZHAdazha/wabao/blob/master/images/23.jpg)
>
> It is easy to find out that in the original version, there exist some distortion when applying smaller screen size(testing with Galaxy S5 360\*640). However, after the improvement by adopting bootstrap and design for another CSS file("mobile.css"), the final result is shown as the right side above, which is more clear and has totally no out of shape(it is also testing with Galaxy S5 360\*640). And all the mobile style is working on any devices that its width is under 1024px(which means some small tablets are also applying the style). Additionally, some extra features are removed under the mobile devices style(like the dustbin which could delete products by dragging) because of the limitation of the small screen sizes. Lastly, after testing, the website is ready for different resolutions and display normally.

#### Evaluation of additional features to add to improve the website in the future:

(1) The local storage system has too man restrictions(such as IE and Edge are not support for this feature, it can only store a little information and it can not working for cross-browser), thus cloud server is supposed to be add in the future to the website which could store a lot of data for different users.

(2) The search system is not completely thoughtful for users (for instance, users might not remember the full name of the products, thus if the search engine could prompt the user instantaneously with associative thinking and vague search for the keywords that users type in would become more considerable.

(3) The Ajax(Asynchronous JavaScript and XML) technology is considered to be added to the system in order to faster the loading speed and saving the computing resource which could largely improve the experience for users.

> **Architecture of the web**

##### The definition of the architecture of the web shows as follows:

> Conceptually, web architecture is the structure of the WWW(World Wide Web) which was invented in 1989 by [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) as an [information system](https://en.wikipedia.org/wiki/Information_system) where documents and [web](https://en.wikipedia.org/wiki/Web_resource) resources could be accessed with URL([Uniform Resource Locators](https://en.wikipedia.org/wiki/URL)). The infrastructure of the web lays on the basis of three important data transmission protocols(TCP/IP, HTTP, HTTPS), representation formats (HTML, CSS, XML), and addressing standards (URI, URL). Each part of those components above are interlinked with each other, consisting as a collection which forming the whole structure of the web.

##### Client-server model

> At the beginning of the web architecture development, the web can be briefly described as a two-tiered architecture: [clients](https://en.ryte.com/wiki/Client) and [servers](https://en.ryte.com/wiki/Server). For instance, the clients like us type in an URL address in the blank of the browser(like "[www.google.com](http://www.google.com/)"), then the browser will retrieve the information by requesting a service with URL address from the server (technically the process is much complicated than this, the details will be discussed in the protocols section), and once the server get the request, it will answering the client by providing the service, in another word, transmitting the information the clients want (however,there will be certain rules transferring the data, which is the protocols we will talk about in next section), and after decoding by the browsers, the client could see the entire web pages.
>
> Protocols for data transfer: there are [HTTP](https://en.ryte.com/wiki/HTTP) (Hypertext Transfer Protocol) and [HTTPS](https://en.ryte.com/wiki/HTTPS) (Hypertext Transfer Protocol Secure, by its literal meaning, this way has specific encryption for security) are mostly used it the web.
>
> Representation formats: HTML and [CSS](https://en.ryte.com/wiki/CSS) are the most frequently used formats while [XML](https://en.ryte.com/wiki/XML) is often used during machines communication between one and another.
>
> Addressing standards: This refers to the URL (Uniform Resource Locator) which is a subset of the more general concept [URI](https://en.ryte.com/wiki/URI)(Uniform Resource Identifier). URI is like the ID number of certain person which is unique, while the URL is a following certain principle that could describe the same unique person by finding the "address"(like describing the physical address of this person's
>
> location)
>
> **The role of web browsers and web servers**
>
> Web Browser is an Application program that clients used to requests the server for accessing the web documents and services, then displaying a World Wide Web document. Moreover, the web browser is installed on the client computer, which working as an interface between clients and the server by sending HTTP requests and getting HTTP responses, and it store data for the clients(like cookies and cache for some websites)
>
> Web server is a system or programme that provide services to clients. The service including storing the data that clients had updated, approving the HTTP requests made by the browser from the clients and sending HTTP response(normally means transmitting data in web documents) Moreover, the web server could also means remote machine that consist of may computers connected to the internet.

### The difference between the web and the Internet

> The Internet is a large network of networks which could connect tens of thousands of computers together all around the world, allowing different computers communicating with one and another by following rules(as known as the protocols).
>
> The web is also been called as WWW(World Wide Web), is a system of the Internet servers with a collection of group of information that could be acquired by the Internet. In another word, the Internet is the medium or way that we can access information.
>
> In general, the Internet is a infrastructure, and the web is a portion of the Internet, which is the service on the top of the Internet.

### How the web is linked together making an interconnect collection of documents relating HTML elements

> The "metadata" in a HTML file contains information about the page, with the HTML elements as follow:
>
> \<base\> indicates the base URL as the root for other relative URLs in a HTML document.
>
> \<head\> stores the [metadata](https://developer.mozilla.org/en-US/docs/Glossary/metadata) about the HTML document(normally for robots from search engine to read instead of human viewers).
>
> \<link\> tells relationships between the current HTML document with external resources.(normally used to import CSS files)
>
> \<meta\> indicates the [metadata](https://developer.mozilla.org/en-US/docs/Glossary/Metadata) that cannot be represented by the form of HTML meta-related elements.
>
> \<style\> presents style information for the HTML document.
>
> \<title\> displays the information of the HTML document's title which will be shown on the browser's page bar.
>
> Besides, there are also other external web resources that could be interconnected by the HTML elements like images and multimedia:
>
> \<img\> embeds an image by URL or relative path that stored in the computer into the HTML document.
>
> \<video\> provides a media player in supporting of playing a video in the HTML document by URL or relative path that stored in the computer.
>
> \<audio\> embeds sound resources in HTML documents.
>
> \<map\> uses with [\<area\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area) elements to define an image map in HTML documents.
>
> Moreover, to import JavaScript files from the web could also been linked with HTML elements:
>
> \<script\> imports external JavaScript files by URLs or relative path that stored in the computer.
>
> In a nutshell, web is large and full with different resources, while the HTML elements could interconnect different documents together.

### The different types of relations there are between HTML documents

> There are different types of defined links list as follow: alternate, author, bookmark, canonical, dns-prefetch, external, help, icon, import, licence, manifest, modulepreload, next, nofollow, noopener, noreferer, opener, pingback, preconnect, prefetch, preload, prevender, prev, search, shortlink, stylesheet, tag.(MDN web docs)
>
> Different types of link means different interconnection they have. For instance, the type of "author" defines a hyperlink to a page describing the author with the way of contacting the author, the type of "external" indicates the hyperlink jump to a outsider resource from the present site, the type of "prev" tells that the hyperlink leads to the previous resource of the sequence that in this current page.
>
> Generally, different types of relations between HTML documents are defining to promote the using experience of clients by speed up the process that fetching resource when jumping between different HTML documents, high efficiency is required to access data information among the server.

## Description of HTTP

> HTTP is stand for Hypertext Transfer Protocol, was initiated by [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) at [CERN](https://en.wikipedia.org/wiki/CERN) in 1989.
>
> It is the foundation of data communication for the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web), which could allow hypertext and hyperlinks become easily accessible for users. In brief, HTTP is a client-server(it has been introduced above) [protocol](https://developer.mozilla.org/en-US/docs/Glossary/protocol) that allowing fetching web resources like HTML documents.
>
> Before discussing in further details, it is necessary to understand the meaning of protocol. Imagining that having a conversation to your friends in reality, you will start a question like "Hello" or "Hi", then your friend may answering "Hello" or "Hi" in response, but there still a chance that your friend do not reply you with any messages(probably he/she do not hear you, or he/she is mad about you), in this way, you only continue your conversation like "how is everything going?" with the precondition that your friend had already made response to you.(no body want be that awkward to have a conversation with someone wouldn't like to talk to you) So does that in computer world, the "conversation" between server and client should follow certain rules or protocols that each side will follow, and only in that way, the data transmit will become successfully and under control.
>
> Technically, HTTP is a [request--response](https://en.wikipedia.org/wiki/Request%E2%80%93response) protocol in the client--server model. After the client had submitting some HTTP requests to the server, the server will provides online web resources like [HTML](https://en.wikipedia.org/wiki/HTML) documents and other files after receiving the post message, and then replying a response to the client which contains status code(like 200,404\...) of the request and also include requested content in the message body.
>
> The difference between HTTPS and HTTP: these two similar names always will cause confusion,
>
> while it is vital important to remember the "S" in HTTPS stands for security. In another word, the HTTPS is a more safe way that in comparison of HTTP. To be short, there is no encryption in HTTP, while in HTTPS, the data are encrypted before sending to client.

### The order of events in an HTTP request

> In general, the whole process of an HTTP request lists as follows:

1.  Establish the connection of TCP protocol.

2.  The web browser sent the request order to the web server.

3.  The web browser sent the request header to the web server.

4.  The web server answer the web browser with response.

5.  The web server answer the web browser with header information.

6.  The web server answer the web browser with the data.

7.  The web server disconnect the TCP protocol with the browser.

> To be more specific, the example of how the process under the web browser post a request for the server for jumping to a URL follows:

1.  Domain analysis. The browser will analyse the domain(or URL) that client type in for according IP address. In order to find the IP address, the browser will search the local DNS cache, if the cache is not hit, the browser will request for the local DNS server for analysis of the domain.

2.  TCP 3-Way Handshake Process. After accessing the correct IP address of the domain, the web browser will request with a random port to the web server programme for a TCP connection. The request will go through the web server, the network card, then the kernel TCP/IP protocol stack, the filter of the firewall, and finally get the web programme which means establish the connection successfully.

3.  Post for a HTTP request. Using the HTTP method(for example POST, GET, PUT) with four parts of HTTP components(request line, header, blank, request data), to post for a HTTP request(more details will be introduce in next section).

4.  The server response for the request and the web browser get the HTML document. The server will respond the request by sending the client the meta-information and the status code(for example 200,404,400) which could indicates whether the communication is fail or success.

5.  The web browser get the HTML documents(if the communication success), and then request the rest of the resource in the HTML documents(like CSS, JavaScript, image files)

6.  The web browser will render the whole page and display it to the user.

> **The different verbs defined in the HTTP protocol and their standard interpretation** There are several different request methods in HTTP protocol had been defined as verbs to describe the desired action that for the resource. The methods are list as followed:
>
> [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
>
> The GET method requests a representation of the specified resource. The GET request should only retrieve data.
>
> [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
>
> The HEAD method demands for a response which is similar to a GET request while there is no response body in a response.
>
> [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
>
> The POST method is used to submit an message to certain resource, possibly causing some
>
> changes of the status or even side effects on the server. [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
>
> The PUT method substitutes all the present representations of the target resource with the request.
>
> [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)
>
> The DELETE method will removes the specified resource. [CONNECT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)
>
> The CONNECT method build a relationship to the server found with the target resource. [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)
>
> The OPTIONS method describes the communication options for the target resource. [TRACE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE)
>
> The TRACE method runs a message loop-back test when circling the path to the target resource. [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)
>
> The PATCH method is used to apply justifications for some parts for resources.

### HTTP status codes

> As it had been mentioned before, after the client had post a request, the server will return specific web resources including status codes, which could indicate the specific [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) request status. It is generally classified in five classes:

1.  Informational responses (100--199). For example:

> [100 Continue](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
>
> This code indicates that everything now is fine and that the client should continue the request. [101 Switching Protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101)
>
> This code is sent in response to for upgrading request header from the client, then indicates the server that which protocol is switching to.
>
> 102 Processing
>
> This code means that the server the request has received which is under process, but no response is available yet.

2.  Successful responses (200--299). For example:

> [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
>
> The request had been completed successfully. [201 Created](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)
>
> The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests.
>
> [202 Accepted](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202)
>
> The request has been received but not executed to the next stage.
>
> 3\. Redirects (300--399). For example:

300. [Multiple Choice](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300)

> The request has multiple responses. The user-agent or user should choose one of them.

301. [Moved Permanently](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)

> The URL of the requested resource has been moved permanently. The new URL is given in the response.

302. [Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)

> It indicates that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future.

4.  Client errors (400--499). For example:

> [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)
>
> The server could not figured out the request probably reason in the not correct syntax. [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
>
> The client must authenticate itself to get the requested response. [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
>
> The server can not find requested resource. In the angle of a browser, this means the URL is not recognized. This response code is the most famous code that almost everybody knows because it always happened when the server is crashed or simply could not visit the website.

5.  Server errors (500--599). For example:

> [500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500)
>
> The server has been in a problematic situation and it could not process the request. [501 Not Implemented](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501)
>
> The request method is not supported by the server and cannot be processed. [502 Bad Gateway](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502)
>
> This error code indicates that the server which working as a gateway get an invalid response. (from MDN)

### The format of the HTTP request and HTTP response

> HTTP requests and responses are usually composed of the following parts:

1.  A start-line in elaboration of the requests implementation with its status of whether successful or a failure.

2.  An HTTP headers specifying the request and describing the body which should included in the message.

3.  A blank line indicating all meta-data for the request that have already sent.

4.  An body containing data linked to the request, or the document associated with a response.

> HTTP Requests Start line
>
> Their start-line contain three elements:

1.  An [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), a verb or noun(for example [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET), [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) or [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)) , which describes the action that the server is about to process.

2.  The request target (usually means an [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL)), or the absolute path of the protocol, port, and domain. It could also be an absolute path, or a complete URL, known as the absolute form, the

> authority component of a URL, consisting of the domain name and optionally the port, the asterisk form, which represents the server as a whole.

3.  The HTTP version that defines the structure of the remaining message, indicates the expected version to be used for the response.

> Headers
>
> [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) from a request follow basic structure: a case-insensitive string followed by a colon (\':\') and a value whose structure depends upon the header. Moreover, several request headers are defined as follows:
>
> General headers, like [Via](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via) which apply to the message as a whole.
>
> Request headers, like [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent), which modify the request by specifying it further, or by conditionally restricting it.
>
> Entity headers, like [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) which apply to the body of the request. Body
>
> The part Body can be broadly divided into two categories: Single-resource body which consists of one single file, defined with two headers: [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length). [Multiple-resource](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) body, consisting of a multiple parts body, each containing a different bit of information.
>
> HTTP Responses Status line
>
> The start line of an HTTP response, called the status line, contains the following information:
>
> The protocol version, a status code which could indicate success or failure of the request, and a status text.
>
> Headers
>
> [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) for responses follow the structure as: a case-insensitive string followed by a colon (\':\') and a value according to the type of the header. There are several response headers available as follows:
>
> General headers, like [Via](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via) which apply to the message as a whole.
>
> Request headers, like [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent), which modify the request by specifying it further, or by conditionally restricting it.
>
> Entity headers, like [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) which apply to the body of the request. Body
>
> The last part of a response is the body which could be generally divided into three classes:
>
> Single-resource body which consists of a single file of given length, defined by the two headers: [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length).
>
> Single-resource body which consists of a single file of given length, encoded by chunks with [Transfer-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding) set to chunked.
>
> [Multiple-resource body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), which consists of a multiple-part body, includes a different section of information.

### How data encoded in different HTTP request types(PUT, GET, POST)

> POST
>
> A POST request is usually submit with an [HTML form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms) thus the content type is selected by putting string in the:

1.  Application/x-www-form-urlencoded: the keys and values are encoded in key-value tuples

> separated by \'&\', with a \'=\' between the key and the value. Non-alphanumeric characters in both keys and values are [percent encoded](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding): this is the reason why this type is not suitable to use with binary data.

2.  Multiple-part/form-data: each value is sent as a block of data, with a user agent-defined delimiter separating each part. The keys are given in the Content-Disposition header of each part.

3.  Text or plain.(from MDN) PUT

> The difference between [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) and POST is that [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) is idempotent: calling it once or several times successively has the same effect, while successive identical in POST request may have additional effects. Thus the data encoded in PUT is similar to the POST request.
>
> GET
>
> In the request of GET, the argument is normally the URL, while the URL could be encoded with ASCII, UTF-8, binary data or other content-type that user defined, then converted it into the available character in URL form.

## Comparison of CSS and HTML

### HTML

> HTML is stand for Hyper Text Mark-up Language. To make an analogy, if a website is a human being, thus HTML is the bone which is main content and support of the body, while the CSS is the skin and other output of the person which could decorate it.(if we have to mention JavaScript, then it is the muscle for it has the capability to move the body with dynamic content)
>
> Back to HTML, In 1989, Tim Berners-Lee invented the Web with HTML as its publishing language, HTML was created to help programmers describe the content on a website. It is like "word" in the "Office" software, people could be able to write text on the document as well as pictures, headers, tables, lists and so on. In a nutshell, HTML is used to defining content.
>
> By its literal meaning, this language consist of "mark-up", in another words, it is the language that consist of "tags", all the document is filled with pairs of "\<tag\>" and "\</tag\>" (there are exception for only one bracket like "\<meta\>", which does not have "\</meta\>").
>
> If we remove a website all CSS files,JS files and other files, only remaining for the HTML files, so the website will only remaining bare text(may be there are images) that laying on the page without any layout designing style.
>
> Additionally, there are more functionality that HTML has which is also vital important. Still, back to the literal meaning about the name of HTML "Hyper Text". So Hypertext is text shown on a [computer display](https://en.wikipedia.org/wiki/Computer_display) with [hyperlinks](https://en.wikipedia.org/wiki/Hyperlinks) to other text that the user can instantaneously access, because Hypertext documents are interconnected with hyperlinks. Besides, hypertext is also used in describing tables,lists, images, headers, or other presentational [content](https://en.wikipedia.org/wiki/Content_format). Hypertext is an utmost component of the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web). In another word, the HTML could retrieve online information or resources by the click of a mouse or pressing a button through hyper links.
>
> Moreover, HTML also is used for describing the structure of a web page, take an example with every HTML file, it is first start with "\<!DOCTYPE html\>", which is the statement to tell the parser of the web browser that which edition of HTML it need to process, and then all the content is included in a tag named "\<html\> and \</html\>", and then the content could barely divided into two parts: \<head\> and \<body\>. while the \<head\> part is mainly covered with main information of
>
> this website(for example \<title\> and \<meta\>), and files that you will import(for instance, \<link\> for CSS files, and \<script\> for JS files). After the web had been loaded completely, all the information that wrote in the \<head\> will not be display, because the information in it is mainly is technically not wrote for human readers, while it is used for robots(from search engine like Google and Baidu)to grab information and site your website. For the part of \<body\>, you could write the content you would like to display to the website viewer, like text, image, list, table, and all the content in the \<body\> will be displayed.
>
> Furthermore, HTML is used to define the structure of how documents are related on the web. In an HTML file, it is allowed to import external files like CSS files, JS files and others. However, it is also allowable to write CSS and JS content in HTML by starting a tag like " \<style\> or \<script\>". Because HTML element is the object or element that selector in CSS will choose, and HTML file is the structure that holds the entire web and a bridge that link other files.

### CSS

> Back to the analogy we used before, which we made a metaphor that CSS is the "skin and other output of the person which could decorate it". Indeed, CSS is stand for Cascading Style Sheets, it was first induced by Hakom Lie in 1996. This language was created to compliment HTML, which could provide better qualities for using experience in web development. The main purpose for CSS is to adjust the way of presentation instead of altering the content, such as colors, layout and fonts, even the looking when the pointer of the mouse hovering the element.
>
> The reason why it is called "Cascading Style Sheets" lays on that programmers could add as many CSS files as they want to a web page, and just like laying paper files in real life: the files on top will cover the ones on the bottom, hence if the same style had been declared more than once, the top one will be working. And thanks to this attribute, programmers are easy to use CSS to adjust different changes to different pages.
>
> The syntax of CSS is also easy: it is consist of "selector" and "declaration block", in each blank of the declaration constituted with "property" and "value". For example, code "body{ font-size: 20px; }" means set the font size to 20 pixels in all the content of tag body.
>
> Additionally, CSS allows the presentation of a web page to change depending on the device it is being viewed on. When importing a CSS file to the HTML file, the attribute of "media" means it only satisfied certain requirements then will set the CSS file working, for instance, the code "media=(max-width:1025px)" means only working for the width of the viewing device is no larger than 1025 pixels(phones or tablets). This way is normally used to implement the responsive web to the different web by adapting different style sheets. Moreover, to make all the pages looking almost the same on different web browsers, a "normalize.css" is usually been imported from some CDN website, which could maintain as little difference as possible of displaying in different browsers.
>
> Furthermore, CSS allows for the easy maintenance of web pages by the sharing of a single style sheet. It is allowable that one single CSS file could be imported to many different HTML pages, thus web developers could adjust their design by applying the file to all web pages. Nevertheless, back to the "cascading" characteristic property of CSS that mentioned before, the programmers can easily rewrite any other styles to HTML elements.

### Conclusion for comparison between HTML and CSS:

> HTML is the language that dictates the content and structure of the web pages, while CSS is the language that changes the design and displaying style of HTML elements. These two language combine together could complete the web page interface(probably still need JavaScript to make it looking better), and CSS code could be write in the HTML file without importing but it is not allowed to write HTML code in CSS file. Programmers should wisely using these two language together to build more reliable, beautiful web pages.

## Reference:

#### Image

> avatar.png, cart.png, top.png, wabao.png, trash.png, star.png, unstar.png, nothing.png, refresh.png
>
> <https://www.iconfont.cn/>
>
> headphone1.jpg, headphone2.jpg, headphone3.jpg, headphone4.jpg, headphone5.jpg, headphone6.jpg,
>
> keyboard1.jpg, keyboard2.jpg, keyboard3.jpg, keyboard4.jpg, keyboard5.jpg, keyboard6.jpg,
>
> mouse1.jpg, mouse2.jpg, mouse3.jpg, mouse4.jpg, mouse5.jpg, mouse6.jpg, phone1.jpg, phone2.jpg, phone3.jpg, phone4.jpg, phone5.jpg, phone6.jpg, https:[//www.tmall.com/](http://www.tmall.com/)
>
> Content
>
> Products specification https:[//www.tmall.com/](http://www.tmall.com/) https://[www.jd.com/](http://www.jd.com/) <https://www.razer.com/hk-en> Description of HTTP
>
> <https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types> <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>
