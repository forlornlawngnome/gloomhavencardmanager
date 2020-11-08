require 'test_helper'

class CharacterScenariosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @character_scenario = character_scenarios(:one)
  end

  test "should get index" do
    get character_scenarios_url
    assert_response :success
  end

  test "should get new" do
    get new_character_scenario_url
    assert_response :success
  end

  test "should create character_scenario" do
    assert_difference('CharacterScenario.count') do
      post character_scenarios_url, params: { character_scenario: { character_id: @character_scenario.character_id, experience: @character_scenario.experience, gold: @character_scenario.gold, health: @character_scenario.health, is_disarm: @character_scenario.is_disarm, is_immobilize: @character_scenario.is_immobilize, is_invisible: @character_scenario.is_invisible, is_muddle: @character_scenario.is_muddle, is_poison: @character_scenario.is_poison, is_strengthen: @character_scenario.is_strengthen, is_stun: @character_scenario.is_stun, is_wound: @character_scenario.is_wound, scenario_id: @character_scenario.scenario_id } }
    end

    assert_redirected_to character_scenario_url(CharacterScenario.last)
  end

  test "should show character_scenario" do
    get character_scenario_url(@character_scenario)
    assert_response :success
  end

  test "should get edit" do
    get edit_character_scenario_url(@character_scenario)
    assert_response :success
  end

  test "should update character_scenario" do
    patch character_scenario_url(@character_scenario), params: { character_scenario: { character_id: @character_scenario.character_id, experience: @character_scenario.experience, gold: @character_scenario.gold, health: @character_scenario.health, is_disarm: @character_scenario.is_disarm, is_immobilize: @character_scenario.is_immobilize, is_invisible: @character_scenario.is_invisible, is_muddle: @character_scenario.is_muddle, is_poison: @character_scenario.is_poison, is_strengthen: @character_scenario.is_strengthen, is_stun: @character_scenario.is_stun, is_wound: @character_scenario.is_wound, scenario_id: @character_scenario.scenario_id } }
    assert_redirected_to character_scenario_url(@character_scenario)
  end

  test "should destroy character_scenario" do
    assert_difference('CharacterScenario.count', -1) do
      delete character_scenario_url(@character_scenario)
    end

    assert_redirected_to character_scenarios_url
  end
end
