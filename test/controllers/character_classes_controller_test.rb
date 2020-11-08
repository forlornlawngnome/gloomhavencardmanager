require 'test_helper'

class CharacterClassesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @character_class = character_classes(:one)
  end

  test "should get index" do
    get character_classes_url
    assert_response :success
  end

  test "should get new" do
    get new_character_class_url
    assert_response :success
  end

  test "should create character_class" do
    assert_difference('CharacterClass.count') do
      post character_classes_url, params: { character_class: { card_back: @character_class.card_back, character_abbreviation: @character_class.character_abbreviation, hand_size: @character_class.hand_size, health: @character_class.health, icon_image: @character_class.icon_image, image: @character_class.image, is_locked: @character_class.is_locked, name: @character_class.name, plaque: @character_class.plaque, symbol: @character_class.symbol } }
    end

    assert_redirected_to character_class_url(CharacterClass.last)
  end

  test "should show character_class" do
    get character_class_url(@character_class)
    assert_response :success
  end

  test "should get edit" do
    get edit_character_class_url(@character_class)
    assert_response :success
  end

  test "should update character_class" do
    patch character_class_url(@character_class), params: { character_class: { card_back: @character_class.card_back, character_abbreviation: @character_class.character_abbreviation, hand_size: @character_class.hand_size, health: @character_class.health, icon_image: @character_class.icon_image, image: @character_class.image, is_locked: @character_class.is_locked, name: @character_class.name, plaque: @character_class.plaque, symbol: @character_class.symbol } }
    assert_redirected_to character_class_url(@character_class)
  end

  test "should destroy character_class" do
    assert_difference('CharacterClass.count', -1) do
      delete character_class_url(@character_class)
    end

    assert_redirected_to character_classes_url
  end
end
