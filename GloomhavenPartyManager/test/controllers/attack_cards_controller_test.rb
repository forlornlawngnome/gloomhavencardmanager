require 'test_helper'

class AttackCardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @attack_card = attack_cards(:one)
  end

  test "should get index" do
    get attack_cards_url
    assert_response :success
  end

  test "should get new" do
    get new_attack_card_url
    assert_response :success
  end

  test "should create attack_card" do
    assert_difference('AttackCard.count') do
      post attack_cards_url, params: { attack_card: { character_class_id: @attack_card.character_class_id, image: @attack_card.image, name: @attack_card.name, reshuffle: @attack_card.reshuffle, value: @attack_card.value } }
    end

    assert_redirected_to attack_card_url(AttackCard.last)
  end

  test "should show attack_card" do
    get attack_card_url(@attack_card)
    assert_response :success
  end

  test "should get edit" do
    get edit_attack_card_url(@attack_card)
    assert_response :success
  end

  test "should update attack_card" do
    patch attack_card_url(@attack_card), params: { attack_card: { character_class_id: @attack_card.character_class_id, image: @attack_card.image, name: @attack_card.name, reshuffle: @attack_card.reshuffle, value: @attack_card.value } }
    assert_redirected_to attack_card_url(@attack_card)
  end

  test "should destroy attack_card" do
    assert_difference('AttackCard.count', -1) do
      delete attack_card_url(@attack_card)
    end

    assert_redirected_to attack_cards_url
  end
end
