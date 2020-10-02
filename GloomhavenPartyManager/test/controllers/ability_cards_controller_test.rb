require 'test_helper'

class AbilityCardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ability_card = ability_cards(:one)
  end

  test "should get index" do
    get ability_cards_url
    assert_response :success
  end

  test "should get new" do
    get new_ability_card_url
    assert_response :success
  end

  test "should create ability_card" do
    assert_difference('AbilityCard.count') do
      post ability_cards_url, params: { ability_card: { character_class_id: @ability_card.character_class_id, image: @ability_card.image, initiative: @ability_card.initiative, level: @ability_card.level, name: @ability_card.name } }
    end

    assert_redirected_to ability_card_url(AbilityCard.last)
  end

  test "should show ability_card" do
    get ability_card_url(@ability_card)
    assert_response :success
  end

  test "should get edit" do
    get edit_ability_card_url(@ability_card)
    assert_response :success
  end

  test "should update ability_card" do
    patch ability_card_url(@ability_card), params: { ability_card: { character_class_id: @ability_card.character_class_id, image: @ability_card.image, initiative: @ability_card.initiative, level: @ability_card.level, name: @ability_card.name } }
    assert_redirected_to ability_card_url(@ability_card)
  end

  test "should destroy ability_card" do
    assert_difference('AbilityCard.count', -1) do
      delete ability_card_url(@ability_card)
    end

    assert_redirected_to ability_cards_url
  end
end
