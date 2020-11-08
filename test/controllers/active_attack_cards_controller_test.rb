require 'test_helper'

class ActiveAttackCardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @active_attack_card = active_attack_cards(:one)
  end

  test "should get index" do
    get active_attack_cards_url
    assert_response :success
  end

  test "should get new" do
    get new_active_attack_card_url
    assert_response :success
  end

  test "should create active_attack_card" do
    assert_difference('ActiveAttackCard.count') do
      post active_attack_cards_url, params: { active_attack_card: { attack_card_id: @active_attack_card.attack_card_id, character_id: @active_attack_card.character_id, is_drawn: @active_attack_card.is_drawn } }
    end

    assert_redirected_to active_attack_card_url(ActiveAttackCard.last)
  end

  test "should show active_attack_card" do
    get active_attack_card_url(@active_attack_card)
    assert_response :success
  end

  test "should get edit" do
    get edit_active_attack_card_url(@active_attack_card)
    assert_response :success
  end

  test "should update active_attack_card" do
    patch active_attack_card_url(@active_attack_card), params: { active_attack_card: { attack_card_id: @active_attack_card.attack_card_id, character_id: @active_attack_card.character_id, is_drawn: @active_attack_card.is_drawn } }
    assert_redirected_to active_attack_card_url(@active_attack_card)
  end

  test "should destroy active_attack_card" do
    assert_difference('ActiveAttackCard.count', -1) do
      delete active_attack_card_url(@active_attack_card)
    end

    assert_redirected_to active_attack_cards_url
  end
end
