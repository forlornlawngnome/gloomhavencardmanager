require 'test_helper'

class EnhancementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @enhancement = enhancements(:one)
  end

  test "should get index" do
    get enhancements_url
    assert_response :success
  end

  test "should get new" do
    get new_enhancement_url
    assert_response :success
  end

  test "should create enhancement" do
    assert_difference('Enhancement.count') do
      post enhancements_url, params: { enhancement: { description: @enhancement.description } }
    end

    assert_redirected_to enhancement_url(Enhancement.last)
  end

  test "should show enhancement" do
    get enhancement_url(@enhancement)
    assert_response :success
  end

  test "should get edit" do
    get edit_enhancement_url(@enhancement)
    assert_response :success
  end

  test "should update enhancement" do
    patch enhancement_url(@enhancement), params: { enhancement: { description: @enhancement.description } }
    assert_redirected_to enhancement_url(@enhancement)
  end

  test "should destroy enhancement" do
    assert_difference('Enhancement.count', -1) do
      delete enhancement_url(@enhancement)
    end

    assert_redirected_to enhancements_url
  end
end
