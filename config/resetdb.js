const mongoose = require("mongoose");
const User = require("../models/user");
const Service = require("../models/service");
const Category = require("../models/category");

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/toolGenieDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//PASSWORD FOR mail@mail.com user is 123

async function resetdb() {

//create mongo id
async function createMongoId(id){
  return new mongoose.mongo.ObjectId(id);
}

  // Function call
  await User.deleteMany();
  await User.insertMany([
    {
      _id: await createMongoId("64bea46a9653f6f2597c13d2"),
      email: "testcustomer@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      password: "$2b$10$WswnDCPk0g6a2Um0ehupSOPIkoZx.6rM0Z0Nthd9o8kl3QW9l2Kru",
      name: "TEST CUSTOMER",
      userType: "customer",
      __v: 0,
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590c7"),
      email: "testpro@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f687654"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590c8"),
      email: "testpro1@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f68765d"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 1",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590c9"),
      email: "testpro2@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f687655"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 2",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590d0"),
      email: "testpro3@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f687656"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 3",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590d1"),
      email: "testpro4@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f687657"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 4",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590d2"),
      email: "testpro5@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f687658"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 5",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590d3"),
      email: "testpro6@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f687659"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 6",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590d4"),
      email: "testpro7@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f68765a"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 7",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590d5"),
      email: "testpro8@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f68765b"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 8",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
    {
      _id: await createMongoId("64bea4ec6ef5e814f5b590d6"),
      email: "testpro9@mail.com",
      telephone: "0000000000",
      location: "Accra, Ghana",
      serviceCategory: await createMongoId("64af313f060d77433f68765c"),
      yearsOfExperience: "23",
      password: "$2b$10$FBewdC2yBG/Wmhiyq46Vb.p6AyG9gKKmYqxss/8MvAWw2eHMDT6se",
      name: "TEST PRO 9",
      userType: "pro",
      __v: 0,
      bio: "This is a test profile bio",
    },
  ])
    .then(function () {
      console.log("Data inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });

  // Function call
  await Service.deleteMany()
  await Service.insertMany([
    {
      title: "Will run errands",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f687654"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590c7"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will clean rooms",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f687655"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590c8"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will repair things",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f687656"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590c9"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will be an assistant",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f687657"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590d0"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will care for your pets",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f687658"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590d1"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will do yard work",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f687659"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590d2"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will do home improvement stuff",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f68765a"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590d3"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will do health and wellness stuff",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f68765b"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590d4"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will plan events",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f68765c"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590d5"),
      createdAt: "2022-07-18T16:19:27Z",
    },
    {
      title: "Will build websites",
      description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      category: await createMongoId("64af313f060d77433f68765d"),
      location: "Tema",
      price: "19",
      provider: await createMongoId("64bea4ec6ef5e814f5b590d6"),
      createdAt: "2022-07-18T16:19:27Z",
    }
  ])
    .then(function () {
      console.log("Data inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });

  await Category.deleteMany();  
  await Category.insertMany([
    {
      _id: await createMongoId("64af313f060d77433f687654"),
      name: "Grocery and Errand Services",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJJSURBVDjLpVM9ixNRFD1vvhLzxUiMCitiCjFWwrJuYaGQICgIgl2wSCWSIr9AFAsbQcVfYGEj9kICizGFgoUIIUENBDFrkLiDukw22fke7501MetHtY+58x6Pd+455973RBiG2MuQsMehzBa9Xu+57/tFCnieB9d15+E4zjxs2+a5WalUSowTbIHA5zRNa+VyuejQn2PRpqqqaLVaGAwGpVqt1owUEOMtXdcxGo0Qi8XmoEUgr4fDITKZDPL5PJPeoO2m6HQ6EXs2m4VpmrvkshUGCiEgy3LEnk6nkUwm0Wg00O/3Swqzs3T2yofi8XgUD+pbSJOYqeNhf0rDl41tCMlHKjFGEG7hh1mAZw7vKsw0mUxgGEZUIGYMggDb0wyKqydweTmFZ6+HuHn15K66PG4ZeBGcX5EoQZE3OBF3oN1uo9vtYmq7+D72osNrb77OgRZtmTZgbDpkLYDCrOyVgxNwsGdJIt9UQ9cPcL+6TKqoqJRApn+CSs84c+LsJJgBWXqhUIjmdz0JFqm48/QTKBc8ShRQhLO20pdQfyngDnCCWes4vPc2bN+DLKkMgcCOspCVhAEp5gvmQbEsq1Gv1y8s3LJoHrtnoQoF1UtpeIGzc+uZmHzHFQ33nqzjmzmBUi6XL/7rjl+5/TKkzoP6gUdvr+NA4iipkGBMP+Pa6Ye0ilOhnd9v4a9Hosg4dhg4lBqjdGoVurYUidi0lnAw6SGh0RmyJP73nFeqa6+OH9l3Ro/pJDlDNlwIKq4Iqdhiig/rH7FhuvgJMpVtkQoe5WAAAAAASUVORK5CYII=",
    },
    {
      _id: await createMongoId("64af313f060d77433f687655"),
      name: "Home Cleaning and Organization",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALWSURBVDjLlZNbSFRRFIb/c8bLjM7NcUadvDZig1kgUVmBEpRplIj1ki/1XFAQXUAq6EL1UvSQFQk9FD4ERRGNZBcJ8UaQGgWpqSOOk46XyctxPHPOPmfvtoJCkUX7ZT+s9X2svdZeAmMM/3P6fV4fUVmZFNJ9RccGq2L+Cbz0uijgEgWMUsZOGUXLviSjA4Efg/sX438V+Bu99yFgL9NgI5SZLSa7GOybYqCqsKCwxlUFHMyjDJ+t7jKjLb0SAtMhjzRCHfsEq4kI/rGZiweuDF36o4DDBw3G5KfW1CrYnBsgB+ugR6ZApsbBBDOcOckITMxU89RfBRx08+uRyblpt8VVhViDAnm4FlSRecUKRJMRTJM54UCKOSZ3mYsZaPDmiQY06xrSknIOCfbMCqjh15BGW0BlGVqUi2YXEB/HEBfDwHQGSaZ0RaAp7J4zr9BtTSmHrvSDhO5CJLNgRMVcWAKJqCBRglqzHRGN4HysjtkIHV8REInlxyc6oUS+o7fDh7g4ilhmRjwPWm2xCIxJMPC/EjWqyHCux9mRLlRorHNZIMrztCHU8wWapiIhIRfBHitC4wm4rcXj6qSAB3Ybai28efY85KcVITPZi4fuaGXJDYd5USAs/sSWW552iztpe+7WcjTV+VB29DDOtDxBacER6IxCpzooGEKzQSQlpqDD/w6dgWYa1VTH0hSKT/p3vL3u6VOUV+vc3nyEBsfAg0vwcJj3hWrQKAHRCeYUCYWZxZgnC+KHodawuPyW0hq/d2Jo+nlkphcD3W1cEIXGR5NqzUKaNRtum4eP1gSXJR1dI21oG2ydXFCxWfh9mZ6dW1sGxhrrs0QoqgqVqkvVeJwF2ObZg4+BdjR9exNSNewavca+Cqtt4+PTOZdB2YWUNRZkpJlQPdyNjZk70dH7XpJAt3C4b6WJq536E9kGVWE1hOD4zfSgS2GiUDidUPLizlzLcs5P3E1ndhQ2sD8AAAAASUVORK5CYII=",
    },
    {
      _id: await createMongoId("64af313f060d77433f687656"),
      name: "Handyman and Repairs",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIiSURBVDjLpdNdSFNhGAdw6baL7qUuuonA6Cojoiw6qwth0VUsDIxKggohIXGtpA+1DxQhwoltsXKjNpbruC9q5jypMwf2sdlqbc120ixzfqzV8Lhz/r3vWRw0yAt38eeF857nx/McnlMEoKiQ/Pei5ayluP2YnzUdeZd8XpMWzef4hRtV24zXNRtA4iQpXxGwMvPSgFbEzHsJU6+BoTrgUVUIi9lZ+Bq2y4gM3DplWePdK3R59giCu0yAk4TdLeCjXUI6CWRTQJoH5hJAn8sEvqcJ5pqtFDguAy0nrGtd+3L9Yy5gzAt8Iue3IJCKAJMvSWEc+BoAvvgBfXUpxrlWtFZupECxDNyp9GxyqMQQBQIXgUEdEDHlsR9hYJpkYpA8M4uwa0sRc1TTYigf0aAJHGLV4BNuMmc9yRXy8n0g6QNmoqSLYQL0A7GeDPqaGQJfWg48PBhrjNowP2oEgg0kTQTozLecmQS+j+S7eOVNImy8gKHbBygwqgDdqp/dCSdytHWuFggbAL4XmHpDxnBLIqfL/uZqc4v+q7N429aJJ/U7KXBNATxMbjj+GPj8jOQpaXcA8J0UYVNlJPZ8fCRqFTVcY+peyfrNCLVr0XG6hAJlCtBx9MVdm5r/5WAyUheTlizlEwv6Ci6wdCdIAWM4swWRB4eXzb/iIv0D3GQv7yoI+BDUqwsC5OLe5v3KCq8KsOt2UKBuNUDb37+QnuuW3v0BGUzmBpilPwcAAAAASUVORK5CYII=",
    },
    {
      _id: await createMongoId("64af313f060d77433f687657"),
      name: "Personal Assistance",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIHSURBVDjLpVNNaxNRFH0fgzNxRlNIm6QVsSRQ1IUiVCSCS8FF4kokO/9BF7oUstBll4IuunBpl61RNy4suhgF21WhJVU0WiHUksmQr2bex/TeMJEoxog+uMzjzT3nnXPmDg3DkPzPMsY1PHrpdaWUZFBCDJ6C3L91NjaWAAH5SwkLhaJaTfBJyOOnmwf4no0lkIJUqg2hAKUAqKMKQMFfEdy5PhN7X/Ge1L22QqACCUFPhCIIvv6UwdJaiyopi1KqAnjMRZ5dUDBzbta5fDxuc99vafuYw9SQgj7B0qsmBeDdTJKXUhMWi5mcaRKSVrt30uCcHrFMtrv7Xb5wq8+uzp/Ip1MJLoYJ4KZiZsoozU5bBqWM9r8slO0c5bjvdrr6uVt9B6CF1dcfrgm5JVHhDwJIuoA3QyS0tteUGzueEtBwIRvnyXTC6HR76PnLw9tX0HdsOCMWJZ0zLZANt63v1NV+ozO377Xn3M2a0hCabdsMPOdGDhL60dFASthjQHgmOOufK/Az8PzrYhGB22wdaGw+n5ngjkkrjsUqF88kOZ75dV9jz2gFgSh/+ubfOJ012VR60sinJg0UhGApgnDrYw0IZHkkAUheXt/ey/aCoHRqOs4cx+7n4TcaehvAbzY+34PUl39HQAd/48KDtxT8FyH9ghQyhyOMgwRVRvDK4s3wjwT/ug4BPyZOkZTlSM0AAAAASUVORK5CYII=",
    },
    {
      _id: await createMongoId("64af313f060d77433f687658"),
      name: "Pet Care Services",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJFSURBVDjLlZLfS1NhGMcF/4Jz6YqkSTRCLDUZipDWSBdjpDFxIdEWLoJ+TJscmqGxtXZqadtqrZP9QoVqV1k0gtWl3rRLkc2z4zxn22lhSLdG9O05w4TC4bp44eWBz/f9vM/zVAGo6ooqjq6IAvNjBZ1BWavWKj1bFwLRMSmL/wNvBRDYbHpQQOttKdHiy8YaPdlEw1jWUnEAgax1qoBNkDsZzqFpXESdS9BWFLAJ4k+RwGSbdwW7L6cNOwYQyBwcW8F+VoiphdphgemdCaJn2rdhn+uv3jGAQMtR/yoI5NSCNeZNBz9zCCx4cfplz6veJ8bq7pC1cCwssx1BOdE+ISfaAnKs1S85SgEE8qQq7rqYEjUXUjBGQ9+5+RuIZ97g+ocRHA9N/jjxMA/bTBHtARkDzxRcef0VfXwehzxZx7Za9PIdd3wIwfk4LFMKBmeLNCG5ZNhyM8vZnivof1TAgVGRLfs3Y6hzY/jtR5x5UYTe8+kXjZdR69Qz3kYW5rCEfazgKAcXjvhaoXc3osk9joZrkZ+km6inSakjvvVuDTo2o/aNKWug90sM6Sb6SPVUpKSbVCd17qmCS/SlPc508q9V/vfQbiStvAJLNA/dqMCqtb0ugTXdlWAMSKCms2UDSNdgmJDBvf+GendG3UiGdLX0qjg0q+Aw1TTnU4ayAaTrMN2T4J1bgzmUQ93VZehcy+jmVuGc/oKB+zk0jwjQ2JcM2wZQdxnS5WudaXWdVd0k7QhLr7KawaV1Atdr7It8zdlF5jcS1qLOWBIaUgAAAABJRU5ErkJggg==",
    },
    {
      _id: await createMongoId("64af313f060d77433f687659"),
      name: "Yard and Outdoor Services",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIhSURBVDjLjZPfS1NxGMbPjX9Bl/0PXqQzIYIEWWIpRFFBQwyNQqhG4VY0dUK0gXQh+KMhu2nKIAkpAu0wkBA0f0QRtoLuFgSbOmSbZ+estsf3+e6ssE7hxXNz4PM+7/d9nqMB0A6jr3Var2hJlBFZorKochhwUpQmkO65iC3/DWwP3sJO0Av59l/QI0qlmuux5buO7EMvcuM+5AInsRdqxo/5ART92j/hqMhIX7uMbOgudu+7YYRdsMaPozRZ1c/EIKwHmiM8KyptD9xEbsyHQvAYSjZozZyC+boDxbeXYKUmkF9vcHQu7QzdRn7KD/OxqwrGW1B8cx7GZheML1eVrO8R5N+5/nqzQWfC1miTgs1X7TA+eBT0bdOD5yudCCRaMPF+CEej2oEBKb6Za9ecTb0TRrIbewLPLnegd/4E2l824vSLBoQ3AjgypR2IqpJ9dAeF4cbfzgJnPnVhZLEVZ23wSsyHvkgcMf0jzvTP/RqQZlSF6D11ML6Za9OZcJuA555dQN+TOKb1JGb0z3i6kKwOsBtWZs6Miu7qYPbadCYcjCUUGJ5eQ09IJ2yKVjlgiQ1jSZgzo+K1eTC+mWvTmbB3dLEGumu344AM68mGqbdLznTntXkwvplr05nwn73hAIvdZj3V+lISDmBUyj1SdbfXdjsNKPPHYLdVPaVhLAlzZlS8tn0w06n2HFDhX8Ufg91mPdkwloQ589K2Vp0G7AOR2a7+EgKeFAAAAABJRU5ErkJggg==",
    },
    {
      _id: await createMongoId("64af313f060d77433f68765a"),
      name: "Home Improvement and Renovation",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADMSURBVDjLY/z//z8DJYCJgUKAYUBE+440IHYh1gAWLGIzgXgPFINBVFTU/1+/fjH8/v2bAUSD8N69exlBcozIYQCyHUgZAzGIdl1R6bGHVBeEAjW5Qr1QDnOFj4/Pf5jNMHzmzBlUFwA1hQIpkMZ7QKxErCtYoJqVoDaGATXcg/JBBnQAsYmdnR2GC27duoUZBuQAeBhERkZi2IKOYbEAop8/f05lF3h7e/8nZDsy/vz5M5VdYGtr+//nz59Y/QvDf/78QcbUcQHFuREAOJ3Rs6CmnfsAAAAASUVORK5CYII=",
    },
    {
      _id: await createMongoId("64af313f060d77433f68765b"),
      name: "Health and Wellness Services",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKrSURBVBgZBcFLiJZlGADQ87zfP/Or4wyjeWkgMSvH0lqYSUg3CSIoISoKokVtgsjaBG0jXES1CwJpFRgF0Y2ScKNBmoVWJpQhUlaWVuo4Nphz+7736ZzITPe8uP/JhSP9x0vYhAUIEMggq7bWXy5O5L6YmnzhwM5tcwCRme57+eCBt5/bdEMpMZo0EoBMSOcuzXv324v+PjV7+acfjy/9cue2WehBaWLdYK8ZPXZWUyIIstJl1bZper6zde2wW8d7DtVzi7JeP3nXs58t+eKN+2cLRMTizGwGm2Kg0AuaQhNEUASqsZFB2zaPufq6/sLeyNBbUCAJKChBiVAilAglQmnCXxemrV48b/3S8NSWKzQDzSPQA8ik1xBCRqhdUkKvYTCLnyfSXG3VOueOa/qiV1ookEmiF0WJUNCUMNCEXoThmSNWXXjVUHPZgsEBqRAFFEhURFAilAglQmQYjBlD5z+0fOVNRv/do98rKjKBArUlk4pEZiKVwsD5PZas3GhkbKPBs3v1Z0/qKl0FCtSaMpMkMwHE5T85vdvwslHd1Keu3PCY/h/v6Tedrk1QoKt0SVa6SlfpalVPvW/5+APMHHF41zsWj07LMwfNnjmknWtBD2qbaqaXvp8TUg2unT/q6eFJw0tW6KZ+Javu0jfWbH3e71+9qcw/AXrQtp2uY2xkwM0riqyt8R92Gd1wt3r5kKzTNj28Tp07Y8HQCaOrtrjz2Oc97lWgna21rTXnOr4+3Zk6/omrxtZaNHxethNE47uPTqCqMycsH1/ttv6BZv+OG9dHZrrlmX0n97xy+7L/5nMoM8vEx4/a8NDrmvKbbCeRACiahev8c+yoE7t3fBCZafP2vdvb+XwwIjamXPTamh39gZyNrClrlbXKWmVNWWuqNUu2bWR3+H8rUk+Grcb3xQAAAABJRU5ErkJggg==",
    },
    {
      _id: await createMongoId("64af313f060d77433f68765c"),
      name: "Event Services",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLvZPZLkNhFIV75zjvYm7VGFNCqoZUJ+roKUUpjRuqp61Wq0NKDMelGGqOxBSUIBKXWtWGZxAvobr8lWjChRgSF//dv9be+9trCwAI/vIE/26gXmviW5bqnb8yUK028qZjPfoPWEj4Ku5HBspgAz941IXZeze8N1bottSo8BTZviVWrEh546EO03EXpuJOdG63otJbjBKHkEp/Ml6yNYYzpuezWL4s5VMtT8acCMQcb5XL3eJE8VgBlR7BeMGW9Z4yT9y1CeyucuhdTGDxfftaBO7G4L+zg91UocxVmCiy51NpiP3n2treUPujL8xhOjYOzZYsQWANyRYlU4Y9Br6oHd5bDh0bCpSOixJiWx71YY09J5pM/WEbzFcDmHvwwBu2wnikg+lEj4mwBe5bC5h1OUqcwpdC60dxegRmR06TyjCF9G9z+qM2uCJmuMJmaNZaUrCSIi6X+jJIBBYtW5Cge7cd7sgoHDfDaAvKQGAlRZYc6ltJlMxX03UzlaRlBdQrzSCwksLRbOpHUSb7pcsnxCCwngvM2Rm/ugUCi84fycr4l2t8Bb6iqTxSCgNIAAAAAElFTkSuQmCC",
    },
    {
      _id: await createMongoId("64af313f060d77433f68765d"),
      name: "Technology Services",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEuSURBVDjLpZM9SgRBFIRr/EHXwGVFAxUPYmTgMTyEoblX2NwjGG9i5B0EMTIQFWTBaHTeqyqDHmdX0FlhHzSvO6n+qvp1ZRvL1AqWrLX5w93VuSXBJkhCKovMrpOJk4vr6lcBidg7PgVMWIYkWATEbv9wc/03AZkwiY/3J7i93STcEmxu7yOz6ReQCDFhFTExIRJWgox+gcwot2UUAmY5kzADzkBEL0Er0PUZReUGIhcRNAU5muI/E1JiZzjF4cEbHp+HyIx+C2otdPgqfTodoP5c/w9BgNn8sPD6sgFzFVu76ieIaGYhMtrwWiGVPRkLCLJkYJX0vyms8rQLMigWBqMj2IKZsFSWCbGM83xVtjGZTFzXNeL2spv3+fmf/QnCJu5HZwCA8XhcVct+5y9H3H2zjxE/HwAAAABJRU5ErkJggg==",
    },
  ])
    .then(function () {
      console.log("Data inserted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
}

  resetdb();

