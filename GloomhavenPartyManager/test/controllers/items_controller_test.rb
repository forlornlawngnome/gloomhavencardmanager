require 'test_helper'

class ItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @item = items(:one)
  end

  test "should get index" do
    get items_url
    assert_response :success
  end

  test "should get new" do
    get new_item_url
    assert_response :success
  end

  test "should create item" do
    assert_difference('Item.count') do
      post items_url, params: { item: { character_id: @item.character_id, counter: @item.counter, counter_max: @item.counter_max, image: @item.image, is_active: @item.is_active, name: @item.name, negative_effects: @item.negative_effects, number: @item.number, type: @item.type, usage_state: @item.usage_state, used: @item.used } }
    end

    assert_redirected_to item_url(Item.last)
  end

  test "should show item" do
    get item_url(@item)
    assert_response :success
  end

  test "should get edit" do
    get edit_item_url(@item)
    assert_response :success
  end

  test "should update item" do
    patch item_url(@item), params: { item: { character_id: @item.character_id, counter: @item.counter, counter_max: @item.counter_max, image: @item.image, is_active: @item.is_active, name: @item.name, negative_effects: @item.negative_effects, number: @item.number, type: @item.type, usage_state: @item.usage_state, used: @item.used } }
    assert_redirected_to item_url(@item)
  end

  test "should destroy item" do
    assert_difference('Item.count', -1) do
      delete item_url(@item)
    end

    assert_redirected_to items_url
  end
end
