require 'test_helper'

class ProductTest < ActiveSupport::TestCase

  test "valid_product" do
    assert_difference('Product.count', +1) do
      Product.create(name: "Pretty Flower", uri: "localhost:3000", price: 10, quality_rating: 3)
    end
  end

  test "invalid_price" do 
    assert_no_changes('Product.count') do
      Product.create(name: "Pretty Flower", uri: "localhost:3000", price: -10, quality_rating: 3)
    end
  end

  test "invalid_qualities" do
    assert_no_changes('Product.count') do
      Product.create(name: "Pretty Flower", uri: "localhost:3000", price: 10, quality_rating: 6)
      Product.create(name: "Pretty Flower", uri: "localhost:3000", price: 10, quality_rating: 0)
    end

  end

  test "missing_name" do
    assert_no_changes('Product.count') do
      Product.create(uri: "localhost:3000", price: 10, quality_rating: 3)
    end

  end

  test "missing_uri" do
    assert_no_changes('Product.count') do
      Product.create(name: "Pretty Flower", price: 10, quality_rating: 3)
    end

  end

  test "missing_price" do
    assert_no_changes('Product.count') do
      Product.create(name: "Pretty Flower", uri: "localhost:3000", quality_rating: 3)
    end

  end

  test "missing_quality_rating" do
    assert_no_changes('Product.count') do
      Product.create(name: "Pretty Flower", uri: "localhost:3000", price: 10)
    end
  end

end
