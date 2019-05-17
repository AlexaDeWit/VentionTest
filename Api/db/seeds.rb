# In principle these image assets would be hosted on a CDN such as an S3 bucket
# Provisioning cloud resources is outside of the scope of this project
# Therefore this behaviour has been simulated instead by fetching them from Vention's Github
Product.delete_all
Product.create([
  {name: "Blue Flower", uri: "https://github.com/VentionCo/vention-front-end-test/blob/master/assets/blue-flower.png", price: 80, quality_rating: 4},
  {name: "Orange Flower", uri: "https://github.com/VentionCo/vention-front-end-test/blob/master/assets/orange-flower.png", price: 17.60, quality_rating: 3},
  {name: "Pink Flower", uri: "https://github.com/VentionCo/vention-front-end-test/blob/master/assets/pink-flower.png", price: 40, quality_rating: 5}
])

