const Router = require("express-promise-router");
const router = Router();

const controller = require("./controller");

const contentRoutes = ["/movies", "/tv-shows"];

contentRoutes.forEach((e) => {
    router.route(e).get(controller.fetchContent);
})

router.route("/fetch-by-criteria").get(controller.fetchByCriteria);

router
  .route("/my-list")
  .get(controller.myList)
  .post(controller.myList)
  .delete(controller.myList);

router
  .route("user-profile")
  .get(controller.userProfile)
  .post(controller.userProfile);

module.exports = router;
