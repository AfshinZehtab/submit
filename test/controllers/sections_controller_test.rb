require 'test_helper'

class SectionsControllerTest < ActionController::TestCase
  test "should get header" do
    get :header
    assert_response :success
  end

  test "should get feature" do
    get :feature
    assert_response :success
  end

  test "should get speacker" do
    get :speacker
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get footer" do
    get :footer
    assert_response :success
  end

end
